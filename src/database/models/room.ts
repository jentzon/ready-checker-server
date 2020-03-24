import mongoose, { Schema } from 'mongoose';
import { throwOrReturnValue } from '../../helpers/errors';

export interface IReadyStatus {
    id: string,
    ready: boolean,
    ETA: number,
}

export interface IReadyCheck {
    startedBy: string,
    active: boolean,
    readyStatus: IReadyStatus[],
}

export interface IRoom extends mongoose.Document {
    id: string,
    name: string,
    created: string,
    members: string[],
    pendingMembers: string[],
    admins: string[],
    rc: IReadyCheck,
}

const readyStatusSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  ready: {
    type: Boolean,
    unique: false,
  },
  ETA: {
    type: Number,
    unique: false,
  },
});

const readyCheckSchema: Schema = new Schema({
  startedBy: {
    type: String,
    unique: true,
  },
  active: {
    type: Boolean,
    unique: false,
  },
  readyStatus: {
    type: [readyStatusSchema],
    unique: false,
  },
});

const roomSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: false,
  },
  created: {
    type: String,
    unique: false,
  },
  members: {
    type: [String],
    unique: false,
  },
  pendingMembers: {
    type: [String],
    unique: false,
  },
  admins: {
    type: [String],
    unique: false,
  },
  rc: {
    type: readyCheckSchema,
    unique: false,
  },
});

const Room = mongoose.model<IRoom>('Room', roomSchema);

export const findAllRooms = (): Promise<IRoom[]> => Room.find()
  .then((data) => data)
  .catch((error) => { throw error; });

export const findRoomById = (id: string): Promise<IRoom> => Room.findOne({ id })
  .then((data) => <IRoom>throwOrReturnValue(data, 'Could not find room with matching property.'))
  .catch((error) => { throw error; });

export default Room;
