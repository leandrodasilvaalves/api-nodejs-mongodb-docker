import { Validation } from "./validation";
import { ILoginModel } from "../interfaces/ILoginModel";

export class LoginValidation extends Validation{
   
    constructor(private _loginModel: ILoginModel) {
        super();
    }

    validate(): void {
        this.validateEmail();
        this.validatePassword();
    }

    validatePassword(): any {
        const test: boolean = this._loginModel.password != null;
        this.testExpression(test, 'Password', "Password can't be null");
    }

    validateEmail(): any {
        const test: boolean = this._loginModel.email != null;
        this.testExpression(test, 'E-mail', "E-mail can't be null");
    }
}