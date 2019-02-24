import userService from '../services/userService';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";
import { IUserModel } from '../interfaces/IUserModel';
import Auth from '../infra/auth';
import { ILoginModel } from '../interfaces/ILoginModel';
import { UserValidator } from '../validators/userValidator';
import { LoginValidator } from '../validators/loginValidator';
import { ValidatorOfPasswordChange } from '../validators/validatorOfPasswordChange';
import { IChangePasswordModel } from '../interfaces/IChangePasswordModel';

class UserController {

    register(req, res) {
        const user: IUserModel = req.body;
        const validator = new UserValidator(user);
        validator.validate();

        if (!validator.isValid())
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, { user: user, message: 'Usuário inválido', errors: validator.listErrors });

        userService.create(user)
            .then(user => Helper.sendResponse(res, HttpStatus.OK, { user: user, message: `Usuário registrado com sucesso!` }))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    login(req, res) {
        const user: ILoginModel = req.body;
        const validator = new LoginValidator(user);
        validator.validate();

        if (!validator.isValid())
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, { user: user, message: 'Dados inválidos', errors: validator.listErrors });

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
                    Helper.sendResponse(res, HttpStatus.OK, {
                        logged: true, message: 'Logado com sucesso', loggedUser: loginModel
                    });
                }
                else
                    Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, { logged: false, message: 'Usuário e/ou senha inválidos!' })
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    changePassword(req, res) {
        const user: IChangePasswordModel = req.body;
        const validator = new ValidatorOfPasswordChange(user);
        validator.validate();

        if (!validator.isValid())
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, { user: user, messsage: 'Dados inválidos', errors: validator.listErrors });

        userService.changePassword(user)
            .then(data => {
                if(data == null)
                    Helper.sendResponse(res, HttpStatus.NOT_FOUND, { messsage: 'Nenhum usuário localizado com este e-mail e senha.' });

                const user = <IUserModel>data;
                Helper.sendResponse(res, HttpStatus.OK, {
                    message: 'Senha atualizada com sucesso', user: { userName: user.userName, email: user.email, img: user.img }
                });
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new UserController();.