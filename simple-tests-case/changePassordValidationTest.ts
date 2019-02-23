import { IchangePasswordModel } from "../interfaces/IChangePasswordModel";
import { ChangePasswordvalidation } from "../validations/changePasswordValidation";

console.log('Test-Success-Init------------------------------------');

this.user = <IchangePasswordModel>{};
this.user.email = "leandro@email.com";
this.user.oldPassword = "Mudar@123";
this.user.newPassword = "Mudar@123$@";

this.validation = new ChangePasswordvalidation(this.user);
this.validation.validate();
console.log(`isValid: ${this.validation.isValid()}`);
console.log(this.validation.listErrors);

console.log('Test-Success-End-------------------------------------');
console.log('');

console.log('Test-Fail-Init------------------------------------');

this.user = <IchangePasswordModel>{};
this.user.email = "leandro@gmail.com";
this.user.oldPassword = "123@Mudar";
this.user.newPassword = "abc";

this.validation = new ChangePasswordvalidation(this.user);
this.validation.validate();
console.log(`isValid: ${this.validation.isValid()}`);
console.log(this.validation.listErrors);

console.log('Test-Fail-End-------------------------------------');
console.log('');