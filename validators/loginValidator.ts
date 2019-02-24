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
        const test: boolean = this._loginModel.password != null && this._loginModel.password != '';
        this.testExpression(test, 'Password', "Password can't be null");
    }

    validateEmail(): any {
        const test: boolean = this._loginModel.email != null && this._loginModel.email != '';
        this.testExpression(test, 'E-mail', "E-mail can't be null");
    }
}