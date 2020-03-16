import mongoose from 'mongoose';
import { DB_URL, mongoConfig } from '../config/constants';

import User from './models/user';

const models = { User };
export const connection = () => mongoose.connect(DB_URL, mongoConfig);
export default models;
