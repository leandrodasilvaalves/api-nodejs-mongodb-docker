import * as mongoose from 'mongoose';
import UserSchema from '../models/userSchema';
import { IUserModel } from '../interfaces/IUserModel';

export default mongoose.model<IUserModel>('Users', UserSchema);