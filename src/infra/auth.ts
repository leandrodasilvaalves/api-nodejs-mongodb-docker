import * as jwt from 'jsonwebtoken';
import Configs from './configs';
import { IUserModel } from '../interfaces/IUserModel';

class Auth {
    validate(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, Configs.secret, function (err, decoded) {
                if (err) {
                    return res.status(403).send({
                        success: false,
                        message: '403 - Ivalid Token'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            return res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            });
        }
    }

    getToken(user: IUserModel) {

        let payload = {
            iss: "http://localhost:3050",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(Configs.tokenExpiration),
            name: user.userName,
            email: user.email,
        };

        return jwt.sign(payload, Configs.secret);
    }
}

export default new Auth();