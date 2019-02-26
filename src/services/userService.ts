import UserRepository from '../repositories/userRepository';
import { IUserModel } from '../interfaces/IUserModel';
import { ILoginModel } from '../interfaces/ILoginModel';
import { IChangePasswordModel } from '../interfaces/IChangePasswordModel';
import { CryptoHelper } from '../infra/cryptoHelper';
import configs from '../infra/configs';

class UserService {
    private crypto = new CryptoHelper(configs.secret);

    create(user: IUserModel) {
        user.password = this.crypto.encrypt(user.password.toString());
        return UserRepository.create(user);
    }

    login(user: ILoginModel) {
        user.password = this.crypto.encrypt(user.password.toString());
        return UserRepository.find({ "email": user.email, "password": user.password });
    }

    changePassword(user: IChangePasswordModel) {
        user.newPassword = this.crypto.encrypt(user.newPassword.toString());
        user.oldPassword = this.crypto.encrypt(user.oldPassword.toString());
        return UserRepository.findOneAndUpdate({"email": user.email, "password":  user.oldPassword}, {$set:{ password: user.newPassword}});
    }
}

export default new UserService();