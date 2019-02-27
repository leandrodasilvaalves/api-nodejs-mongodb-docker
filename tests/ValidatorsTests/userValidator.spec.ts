import { expect } from "chai";
import 'mocha';
import { IUserModel } from "../../src/interfaces/IUserModel";
import { UserValidator } from "../../src/validators/userValidator";

describe('User Validator Tests', () => {
    it('Should be success', () => {
        //arrange
        let user = <IUserModel>{};
        user.userName = "Leandro";
        user.email = "leandro@email.com";
        user.phoneNumber = "16993947762";
        user.img = "http://abcd.efgh.ijk.jpg";
        user.password = "Mudar@123";

        const validator = new UserValidator(user);

        //action
        validator.validate();

        //assert
        expect(validator.isValid()).to.equal(true);
    });

    it('Shoul be fail', () => {
        //arrange
        let user = <IUserModel>{};
        user.userName = "Le";
        user.email = "leandroemail.com";
        user.phoneNumber = "947762";
        user.img = "http://abcd.efgh.ijk.pdf";
        user.password = "mudar";

        const validator = new UserValidator(user);

        //action
        validator.validate();

        //assert
        expect(validator.isValid()).to.equal(false);
    });
});