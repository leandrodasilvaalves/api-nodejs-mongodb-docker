import { ValidationBase } from "./validatorBase";
import { IChangePasswordModel as IChangePasswordModel } from "../interfaces/IChangePasswordModel";
import { PasswordValidator } from "./passwordValidator";

export class ValidatorOfPasswordChange extends ValidationBase {

    constructor(private model: IChangePasswordModel) {
        super();
    }

    validate(): void {
        this.validatePattern();
    }

    validatePattern(): void {
        const passwordValidator = new PasswordValidator(this.model.newPassword.toString(), 'New Password');
        passwordValidator.validate();
        this.listErrors = this.listErrors.concat(passwordValidator.listErrors);
    }
}