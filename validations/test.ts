import { UserValidation } from "./userValidation";
import { IUserModel } from "../interfaces/IUserModel";

this.user = <IUserModel>{};
this.user.userName = "Leandro";
this.user.email = "leandro@email.com";
this.user.phoneNumber = "16993947762";
this.user.img = "http://abcd.efgh.ijk.jpg";
this.user.password = "Mudar@123";

this.validation = new UserValidation(this.user);
this.validation.validate();
console.log(`isValid: ${ this.validation.isValid }`);
console.log(this.validation.listErrors);