import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import secrets from '../config/secrets';
import { IUser } from '../models/user';

export const generateHash = (password: string): string => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

export const validPassword = (in_password: string, hashed_password: string): boolean => {
  return bcrypt.compareSync(in_password, hashed_password);
};

export const generateToken = (id: string): string => {
  return jwt.sign({ id: id }, secrets.jwtSecret);
};

export const auth = (req: express.Request): Promise<IUser> => {
  return new Promise<IUser>((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err || !user) {
        reject('Incorrect email or password.');
      }

      resolve(user);
    })(req);
  });
};
