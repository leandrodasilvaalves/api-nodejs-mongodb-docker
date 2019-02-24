import { Validation } from "./validation";
import { IchangePasswordModel } from "../interfaces/IChangePasswordModel";
import UserRepository from '../repositories/userRepository';
import { IError } from "../interfaces/IError";
import { PasswordValidation } from "./passwordValidation";

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
        const passwordValidator = new PasswordValidation(this.model.newPassword.toString(), 'New Password');
        passwordValidator.validate();
        this.listErrors = this.listErrors.concat(passwordValidator.listErrors);
    }
}