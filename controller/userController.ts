import userService from '../services/userService';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";
import { IUserModel } from '../interfaces/IUserModel';
import Auth from '../infra/auth';
import { ILoginModel } from '../interfaces/ILoginModel';

class UserController {
    register(req, res) {
        const user: IUserModel = req.body;
        userService.create(user)
            .then(user => Helper.sendResponse(res, HttpStatus.OK, { user: user, message: `Usuário registrado com sucesso!` }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    login(req, res) {
        const user: IUserModel = req.body;
        userService.login(user)
            .then(data => {
                if (data.length === 1) {
                    const userData = <IUserModel>data[0];
                    const loginModel: ILoginModel = {
                        email: userData.email,
                        userName: userData.userName,
                        img: userData.img,
                        token: Auth.getToken(userData)
                    };
                    Helper.sendResponse(res, HttpStatus.OK, { logged: true, message: 'Logado com sucesso', loggedUser: loginModel });
                }
                else
                    Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, { logged: false, message: 'Usuário e/ou senha inválidos!' })
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    changePassword(req, res) {
        const user: IUserModel = req.body;
        userService.changePassword(user)
            .then(data => {
                const user = <IUserModel>data;
                Helper.sendResponse(res, HttpStatus.OK, { 
                    message: 'Senha atualizada com sucesso', user: { userName: user.userName, email: user.email, img: user.img }
                });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new UserController();