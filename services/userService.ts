import UserRepository from '../repositories/userRepository';

class UserService{
    create(user){
        return UserRepository.create(user);
    }
}

export default new UserService();