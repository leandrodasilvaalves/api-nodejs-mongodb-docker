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
        const {userName} = this._user;
        const test: boolean = userName.length > 4 && userName.length < 25;
        this.testExpression(test, 'UserName', 'UserName invalid. Min lenght 4 and max lenth 25');
    }

    private validateEmail() {
        const pattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.email), 'E-mail', 'E-mail invalid');
    }

    private validatePassword() {
        const passwordValidator = new PasswordValidator(this._user.password, 'Password');
        passwordValidator.validate();
        this.listErrors = this.listErrors.concat(passwordValidator.listErrors);
    }

    private validatePhoneNumber() {
        const pattern: RegExp = /[^\d]+/;
        const phoneNumber = this._user.phoneNumber.replace(pattern, '');
        const test: boolean = phoneNumber.length == 10 || phoneNumber.length == 11;
        this.testExpression(test, 'PhoneNumber', 'PhoneNumber invalid. Set DDD');
    }

    private validateImage() {
        const pattern: RegExp = /(http(s?):).+\.(?:jpg|png)/;
        const regex = new RegExp(pattern);
        this.testExpression(regex.test(this._user.img), 'Image', 'Image invalid. Only .jpg or .png');
    }
}