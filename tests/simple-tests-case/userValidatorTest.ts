import { UserValidator } from "../../src/validators/userValidator";
import { IUserModel } from "../../src/interfaces/IUserModel";

console.log('Test-Success-Init------------------------------------');

this.user = <IUserModel>{};
this.user.userName = "Leandro";
this.user.email = "leandro@email.com";
this.user.phoneNumber = "16993947762";
this.user.img = "http://abcd.efgh.ijk.jpg";
this.user.password = "Mudar@123";

this.validator = new UserValidator(this.user);
this.validator.validate();
console.log(`isValid: ${ this.validator.isValid() }`);
console.log(this.validator.listErrors);

console.log('Test-Success-End------------------------------------');
console.log('');
console.log('Test-Fail-Init--------------------------------------');

this.user = <IUserModel>{};
this.user.userName = "Le";
this.user.email = "leandroemail.com";
this.user.phoneNumber = "947762";
this.user.img = "http://abcd.efgh.ijk.pdf";
this.user.password = "mudar";

this.validator = new UserValidator(this.user);
this.validator.validate();
console.log(`isValid: ${ this.validator.isValid() }`);
console.log(this.validator.listErrors);

console.log('Test-Fail-End---------------------------------------');