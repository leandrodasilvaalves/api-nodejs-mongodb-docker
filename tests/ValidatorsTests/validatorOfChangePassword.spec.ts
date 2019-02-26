import { expect } from "chai";
import 'mocha';
import { IChangePasswordModel } from "../../src/interfaces/IChangePasswordModel";
import { ValidatorOfPasswordChange } from "../../src/validators/validatorOfPasswordChange";

describe('Validator Of Change Password Tests', () => {
    it('Shoud be success', () => {
        //arrange
        let user = <IChangePasswordModel>{};
        user.email = "leandro@email.com";
        user.oldPassword = "Mudar@123";
        user.newPassword = "Mudar@123$@";

        const validator = new ValidatorOfPasswordChange(user);

        //action
        validator.validate();

        //assert
        expect(validator.isValid()).to.equal(true);
    });

    it('Shoud be fail', () => {
        //arrange
        let user = <IChangePasswordModel>{};
        user.email = "leandro@gmail.com";
        user.oldPassword = "123@Mudar";
        user.newPassword = "Abc1";

        const validator = new ValidatorOfPasswordChange(user);

        //action
        validator.validate();

        //assert
        expect(validator.isValid()).to.equal(false);
    });
});