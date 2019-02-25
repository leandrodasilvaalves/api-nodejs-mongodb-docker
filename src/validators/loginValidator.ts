import { ValidationBase } from "./validatorBase";
import { ILoginModel } from "../interfaces/ILoginModel";

export class LoginValidator extends ValidationBase{
   
    constructor(private _loginModel: ILoginModel) {
        super();
    }

    validate(): void {
        this.validateEmail();
        this.validatePassword();
    }

    validatePassword(): any {
        const { password } = this._loginModel;
        const test: boolean = password != null && password != '';
        this.testExpression(test, 'Password', "Password can't be null");
    }

    validateEmail(): any {
        const { email } = this._loginModel;
        const test: boolean = email != null && email != '';
        this.testExpression(test, 'E-mail', "E-mail can't be null");
    }
}