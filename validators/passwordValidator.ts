import { ValidationBase } from "./validatorBase";

export class PasswordValidator extends ValidationBase {
    
    constructor(private passwordValue: string,  private passwordPropertyName: string) {
        super();
    }
    
    validate(): void {
        const messageError : String ='Only insert a string that has 1 uppercase alphabet, 1 lowercase alphabet, 2 digits and 1 special character. Also the minimum allowed length is 8 characters.';
        const pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/;
        const regex = new RegExp(pattern);
        
        this.testExpression(
            regex.test(this.passwordValue), 
            this.passwordPropertyName,
            `${ this.passwordPropertyName} is invalid. ${ messageError}`);
    }

}