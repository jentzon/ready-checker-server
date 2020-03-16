import mongoose, { Schema } from 'mongoose';
import { throwOrReturnValue } from '../../helpers/errors';

export interface IUser extends mongoose.Document {
    id: string,
    name: string,
    nick: string,
    joined: string,
    mail: string
}

const userSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: false,
  },
  nick: {
    type: String,
    unique: true,
  },
  joined: {
    type: String,
    unique: false,
  },
  mail: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export const findAllUsers = (): Promise<IUser[]> => User.find()
  .then((data: IUser[]) => data)
  .catch((error: Error) => { throw error; });

export const findById = (id: string): Promise<IUser | null> => User.findOne({ id })
  .then((data: IUser | null) => <IUser>throwOrReturnValue(data, 'Could not find user with matching property.'))
  .catch((error: Error) => { throw error; });

export const findByNick = (nick: string): Promise<IUser | null> => User.findOne({ nick })
  .then((data: IUser | null) => <IUser>throwOrReturnValue(data, 'Could not find user with matching property.'))
  .catch((error: Error) => { throw error; });

export const findByMail = (mail: string): Promise<IUser | null> => User.findOne({ mail })
  .then((data: IUser | null) => <IUser>throwOrReturnValue(data, 'Could not find user with matching property.'))
  .catch((error: Error) => { throw error; });

export default User;
