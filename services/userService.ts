import UserRepository from '../repositories/userRepository';
import { IUserModel } from '../interfaces/IUserModel';
import { ILoginModel } from '../interfaces/ILoginModel';
import { IChangePasswordModel } from '../interfaces/IChangePasswordModel';

class UserService {
    create(user: IUserModel) {
        return UserRepository.create(user);
    }

    login(user: ILoginModel) {
        return UserRepository.find({ "email": user.email, "password": user.password });
    }

    changePassword(user: IChangePasswordModel) {
        return UserRepository.findOneAndUpdate({email: user.email}, {$set:{ password: user.newPassword}});
    }
}

export default new UserService();