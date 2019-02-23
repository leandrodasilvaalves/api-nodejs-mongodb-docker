import { UserValidation } from "../validations/userValidation";
import { IUserModel } from "../interfaces/IUserModel";

console.log('Test-Success-Init------------------------------------');

this.user = <IUserModel>{};
this.user.userName = "Leandro";
this.user.email = "leandro@email.com";
this.user.phoneNumber = "16993947762";
this.user.img = "http://abcd.efgh.ijk.jpg";
this.user.password = "Mudar@123";

this.validation = new UserValidation(this.user);
this.validation.validate();
console.log(`isValid: ${ this.validation.isValid() }`);
console.log(this.validation.listErrors);

console.log('Test-Success-End------------------------------------');
console.log('');
console.log('Test-Fail-Init--------------------------------------');

this.user = <IUserModel>{};
this.user.userName = "Le";
this.user.email = "leandroemail.com";
this.user.phoneNumber = "947762";
this.user.img = "http://abcd.efgh.ijk.pdf";
this.user.password = "mudar123";

this.validation = new UserValidation(this.user);
this.validation.validate();
console.log(`isValid: ${ this.validation.isValid() }`);
console.log(this.validation.listErrors);

console.log('Test-Fail-End---------------------------------------');