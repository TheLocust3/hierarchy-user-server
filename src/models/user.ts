import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
