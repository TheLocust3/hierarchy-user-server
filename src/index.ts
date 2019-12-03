import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';

import dbConfig from './config/database';
import strategy from './config/passport';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/hierarchy', dbConfig);

app.use(passport.initialize());
passport.use(strategy);

app.use('/api/v1/auth/', authRoutes);
app.use('/api/v1/user/', userRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
