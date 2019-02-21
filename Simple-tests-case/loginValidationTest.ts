import { ILoginModel } from "../interfaces/ILoginModel";
import { LoginValidation } from "../validations/loginValidation";

console.log('Test-Success-Init------------------------------------');

this.login = <ILoginModel>{};
this.login.email = "leandro@email.com";
this.login.password   = "Mudar@123";

this.validation = new LoginValidation(this.login);
this.validation.validate();
console.log(`isValid: ${ this.validation.isValid() }`);
console.log(this.validation.listErrors);

console.log('Test-Success-End-------------------------------------');
console.log('');

console.log('Test-Fail-Init------------------------------------');

this.login = <ILoginModel>{};

this.validation = new LoginValidation(this.login);
this.validation.validate();
console.log(`isValid: ${ this.validation.isValid() }`);
console.log(this.validation.listErrors);

console.log('Test-Fail-End-------------------------------------');
console.log('');