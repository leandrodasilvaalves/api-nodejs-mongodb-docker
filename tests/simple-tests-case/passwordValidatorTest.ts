import { PasswordValidator } from '../../src/validators/passwordValidator';

const passwords: Array<string> = ['Mudar@123', 'Mudar123', 'Mudar@', 'mudar@123', '@123', '123', 'Mudar', 'Mu@1'];
passwords.forEach(pass =>Validate(pass));

function Validate(password: string) {    
    const validator = new PasswordValidator(password, 'Password');
    validator.validate();
    console.log(password);    
    console.log(`isValid: ${validator.isValid()}`);
    console.log(validator.listErrors);
}