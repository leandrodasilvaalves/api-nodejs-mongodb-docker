import { ILoginModel } from "../src/interfaces/ILoginModel";
import { LoginValidator } from "../src/validators/loginValidator";
import { expect } from "chai";
import 'mocha';

describe('Login Validator Tests', () => {

    it('Should be suscess', () => {
        //arrange
        let login = <ILoginModel>{};
        login.email = "leandro@email.com";
        login.password = "Mudar@123";
        const validator = new LoginValidator(login);

        //action
        validator.validate();

        //assert
        expect(validator.isValid()).to.equal(true);
    });

    it('Should be fail', () => {
        //arrange
        let login = <ILoginModel>{};
        const validator = new LoginValidator(login);

        //action
        validator.validate();

        //assert
        expect(validator.isValid()).to.equal(false);
    });
});