import mongoose from 'mongoose';

import dbConfig from './database';
import User from '../models/user';
import { generateHash } from '../utils/auth';

mongoose.connect('mongodb://localhost/hierarchy', dbConfig);

const admin = new User();

admin.email = 'jake.kinsella@gmail.com';
admin.password = generateHash('password');

admin.save();
