import userService from '../services/userService';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";

class UserController{
    register(req, res){
        let user = req.body;
        userService.create(user)
            .then(user => Helper.sendResponse(res, HttpStatus.OK, `Usuário registrado com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));        
    }
}

export default new UserController();