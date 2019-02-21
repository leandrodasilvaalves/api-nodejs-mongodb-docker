import { IUserModel } from "../interfaces/IUserModel";
import { Validation } from "./validation";

export class UserValidation extends Validation {

    constructor(private _user: IUserModel) {
        super();
    }

    validate() {
        this.validateUserName();
        this.validateEmail();
        this.validatePassword();
        this.validatePhoneNumber();
        this.validateImage();
    }

    private validateUserName() {
        const name: String = this._user.userName;
        const test: boolean = name.length > 4 && name.length < 25;
        this.testExpression(test, 'UserName', 'UserName invalid');
    }

    private validateEmail() {
        const pattern: string = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.email.toString()), 'E-mail', 'E-mail inválid');
    }

    private validatePassword() {
        const pattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$';
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.password.toString()), 'Password', 'Password invalid');
    }

    private validatePhoneNumber() {
        const pattern = '[^\d]+';
        const phoneNumber = this._user.phoneNumber.replace(pattern, '');
        const test: boolean = phoneNumber.length == 8 || phoneNumber.length == 9;
        this.testExpression(test, 'PhoneNumber', 'PhoneNumber invalid');
    }

    private validateImage() {
        const pattern = '(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)';
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.img.toString()), 'Image', 'Image invalid');
    }
}