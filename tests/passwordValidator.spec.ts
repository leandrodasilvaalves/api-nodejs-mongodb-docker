import { expect } from 'chai';
import 'mocha';
import { PasswordValidator } from '../src/validators/passwordValidator';

describe('Password Validator Test', () => {

    it('Must validate success and failure scenarios', () => {
        //arrange
        const passwords: Array<IMockTest> = [
            <IMockTest>{ password: 'Mudar@123', expect: true },
            <IMockTest>{ password: 'Mudar123', expect: false },
            <IMockTest>{ password: 'Mudar@', expect: false },
            <IMockTest>{ password: 'mudar@123', expect: false },
            <IMockTest>{ password: '@123', expect: false },
            <IMockTest>{ password: '123', expect: false },
            <IMockTest>{ password: 'Mudar', expect: false },
            <IMockTest>{ password: 'Mu@1', expect: false }];

        passwords.forEach(obj => {
            const validator = new PasswordValidator(obj.password, 'Password');
            //action
            validator.validate();

            //assert
            expect(validator.isValid()).to.equal(obj.expect);
        });
    });
});

interface IMockTest {
    expect: boolean;
    password: string;
}