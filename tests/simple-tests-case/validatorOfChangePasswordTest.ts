import { IChangePasswordModel } from "../../src/interfaces/IChangePasswordModel";
import { ValidatorOfPasswordChange } from "../../src/validators/validatorOfPasswordChange";

console.log('Test-Success-Init------------------------------------');

this.user = <IChangePasswordModel>{};
this.user.email = "leandro@email.com";
this.user.oldPassword = "Mudar@123";
this.user.newPassword = "Mudar@123$@";

this.validator = new ValidatorOfPasswordChange(this.user);
this.validator.validate();
console.log(`isValid: ${this.validator.isValid()}`);
console.log(this.validator.listErrors);

console.log('Test-Success-End-------------------------------------');
console.log('');

console.log('Test-Fail-Init------------------------------------');

this.user = <IChangePasswordModel>{};
this.user.email = "leandro@gmail.com";
this.user.oldPassword = "123@Mudar";
this.user.newPassword = "Abc1";

this.validator = new ValidatorOfPasswordChange(this.user);
this.validator.validate();
console.log(`isValid: ${this.validator.isValid()}`);
console.log(this.validator.listErrors);

console.log('Test-Fail-End-------------------------------------');
console.log('');