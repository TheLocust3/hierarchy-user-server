import _ from 'lodash';
import passportJwt from 'passport-jwt';

import User from '../models/user';
import secrets from './secrets';

const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

const jwtOptions: any = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secrets.jwtSecret;

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
  User.find({ _id: jwtPayload.id }, (err, users) => {
    if (_.isEmpty(users)) {
      next(null, false);
    } else {
      next(null, users[0]);
    }
  });
});

export default strategy;
