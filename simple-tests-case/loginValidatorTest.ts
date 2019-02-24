import { ILoginModel } from "../interfaces/ILoginModel";
import { LoginValidator } from "../validators/loginValidator";

console.log('Test-Success-Init------------------------------------');

this.login = <ILoginModel>{};
this.login.email = "leandro@email.com";
this.login.password   = "Mudar@123";

this.validator = new LoginValidator(this.login);
this.validator.validate();
console.log(`isValid: ${ this.validator.isValid() }`);
console.log(this.validator.listErrors);

console.log('Test-Success-End-------------------------------------');
console.log('');

console.log('Test-Fail-Init------------------------------------');

this.login = <ILoginModel>{};

this.validator = new LoginValidator(this.login);
this.validator.validate();
console.log(`isValid: ${ this.validator.isValid() }`);
console.log(this.validator.listErrors);

console.log('Test-Fail-End-------------------------------------');
console.log('');