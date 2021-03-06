import userService from '../services/userService';
import * as HttpStatus from 'http-status';
import ApiHelper from "../infra/apiHelper";
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
            ApiHelper.sendResponse(res, HttpStatus.BAD_REQUEST, { user: user, message: 'Invalid user', errors: validator.listErrors });
        else {
            userService.create(user)
                .then(user => ApiHelper.sendResponse(res, HttpStatus.OK, { user: user, message: `Registered user successfully!` }))
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
    }

    login(req, res) {
        const user: ILoginModel = req.body;
        const validator = new LoginValidator(user);
        validator.validate();

        if (!validator.isValid())
            ApiHelper.sendResponse(res, HttpStatus.BAD_REQUEST, { user: user, message: 'Invalid data', errors: validator.listErrors });
        else {
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
                        ApiHelper.sendResponse(res, HttpStatus.OK, {
                            logged: true, message: 'Successfully logged in', loggedUser: loginModel
                        });
                    }
                    else
                        ApiHelper.sendResponse(res, HttpStatus.UNAUTHORIZED, { logged: false, message: 'Invalid user and/or password!' })
                })
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
    }

    changePassword(req, res) {
        const user: IChangePasswordModel = req.body;
        const validator = new ValidatorOfPasswordChange(user);
        validator.validate();

        if (!validator.isValid())
            ApiHelper.sendResponse(res, HttpStatus.BAD_REQUEST, { user: user, messsage: 'Invalid data', errors: validator.listErrors });
        else {
            userService.changePassword(user)
                .then(data => {
                    if (data == null)
                        ApiHelper.sendResponse(res, HttpStatus.NOT_FOUND, { messsage: 'No user found with this email and password.' });

                    const user = <IUserModel>data;
                    ApiHelper.sendResponse(res, HttpStatus.OK, {
                        message: 'Password updated successfully', user: { userName: user.userName, email: user.email, img: user.img }
                    });
                })
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
    }
}

export default new UserController();