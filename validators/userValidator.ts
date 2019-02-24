import { IUserModel } from "../interfaces/IUserModel";
import { ValidationBase } from "./validatorBase";
import { PasswordValidator } from "./passwordValidator";

export class UserValidator extends ValidationBase {

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
        this.testExpression(test, 'UserName', 'UserName invalid. Min lenght 4 and max lenth 25');
    }

    private validateEmail() {
        const pattern: string = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.email.toString()), 'E-mail', 'E-mail invalid');
    }

    private validatePassword() {
        const passwordValidator = new PasswordValidator(this._user.password.toString(), 'Password');
        passwordValidator.validate();
        this.listErrors = this.listErrors.concat(passwordValidator.listErrors);
    }

    private validatePhoneNumber() {
        const pattern = '[^\d]+';
        const phoneNumber = this._user.phoneNumber.replace(pattern, '');
        const test: boolean = phoneNumber.length == 10 || phoneNumber.length == 11;
        this.testExpression(test, 'PhoneNumber', 'PhoneNumber invalid. Set DDD');
    }

    private validateImage() {
        const pattern = '(http(s?):).+\.(?:jpg|png)';
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.img.toString()), 'Image', 'Image invalid. Only .jpg or .png');
    }
}