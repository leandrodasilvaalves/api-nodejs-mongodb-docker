import * as mongoose from 'mongoose';
import UserSchema from '../models/userSchema';

export default mongoose.model('user', UserSchema);