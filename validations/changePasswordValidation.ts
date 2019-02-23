import { Validation } from "./validation";
import { IchangePasswordModel } from "../interfaces/IChangePasswordModel";
import UserRepository from '../repositories/userRepository';
import { IError } from "../interfaces/IError";

export class ChangePasswordvalidation extends Validation {

    constructor(private model: IchangePasswordModel) {
        super();
    }

    validate(): void {
        this.validateOldPassword();
        this.validatePattern();
    }

    validateOldPassword(): void {
        UserRepository
            .find({ "email": this.model.email, "password": this.model.oldPassword })
            .then(data => this.testExpression(data == null || data.length != 1, 'Old Password', 'User not found'))
            .catch(error => this.listErrors.push(<IError>{ error: "Error", description: `Error in system: ${error}` }));
    }

    validatePattern(): void {
        const pattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$';
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this.model.newPassword.toString()), 'Password', 'New password invalid');
    }
}