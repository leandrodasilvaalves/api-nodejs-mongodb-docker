import userService from '../services/userService';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";

class UserController {
    register(req, res) {
        let user = req.body;
        userService.create(user)
            .then(user => Helper.sendResponse(res, HttpStatus.OK, `Usuário registrado com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    login(req, res) {
        let user = req.body;
        userService.login(user.email, user.password)
            .then(data =>{
                if(data.length === 1)
                    Helper.sendResponse(res, HttpStatus.OK, { message: "Logado" });
                else
                    Helper.sendResponse(res, HttpStatus.UNAUTHORIZED, 'Usuário e/ou senha inválidos!')
            })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new UserController();