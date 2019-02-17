import UserRepository from '../repositories/userRepository';
import userRepository from '../repositories/userRepository';


class UserService {
    create(user) {
        return UserRepository.create(user);
    }

    login(email: String, password: String) {
        return userRepository.find({ "email": email, "password": password });
    }

    token(){
        
    }
}

export default new UserService();