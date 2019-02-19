import userService from '../services/userService';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";
import { IUserModel } from '../interfaces/IUserModel';
import Auth from '../infra/auth';
import { ILoginModel } from '../interfaces/ILoginModel';

class UserController {
    register(req, res) {
        let user = req.body;
        userService.create(user)
            .then(user => Helper.sendResponse(res, HttpStatus.OK, `Usuário registrado com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    login(req, res) {
        let user: IUserModel = req.body;
        userService.login(user)
            .then(data => {
                if (data.length === 1) {
                    const userData = <IUserModel>data[0];
                    const loginModel : ILoginModel = {
                        email: userData.email,
                        userName: userData.userName,
                        img: userData.img,
                        token: Auth.getToken(userData)
                    };
                    Helper.sendResponse(res, HttpStatus.OK, { message: "Logado com sucesso", logedUser: loginModel });
                }
                else
                    Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, 'Usuário e/ou senha inválidos!')
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new UserController();