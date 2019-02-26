import * as mongoose from 'mongoose';

export interface IUserModel extends mongoose.Document{
    _id: string;
    email : string;
    userName : string;
    password : string;
    phoneNumber : string;
    img : string;
    createDate : Date;
    active : Boolean;
}