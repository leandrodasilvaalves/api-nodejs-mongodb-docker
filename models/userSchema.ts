import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email : { type: String},
    userName : { type: String},
    password : { type: String},
    phoneNumber : { type: String},
    img : { type: String},
    createDate : { type: Date},
    active : { type: Boolean},
});

export default UserSchema;
