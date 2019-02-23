import * as mongoose from 'mongoose';

export interface IUserModel extends mongoose.Document{
    _id: String;
    email : String;
    userName : String;
    password : String;
    phoneNumber : String;
    img : String;
    createDate : Date;
    active : Boolean;
}