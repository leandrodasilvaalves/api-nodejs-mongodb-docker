import UserRepository from '../repositories/userRepository';
import { IUserModel } from '../interfaces/IUserModel';

class UserService {
    create(user: IUserModel) {
        return UserRepository.create(user);
    }

    login(user: IUserModel) {
        return UserRepository.find({ "email": user.email, "password": user.password });
    }

    changePassword(user: IUserModel) {
        return UserRepository.findOneAndUpdate({email: user.email}, {$set:{ password: user.password}});
    }
}

export default new UserService();