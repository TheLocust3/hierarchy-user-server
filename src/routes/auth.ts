import _ from 'lodash';
import express from 'express';

import { validPassword, generateToken } from '../utils/auth';
import User, { IUser } from '../models/user';
import { auth, generateHash } from '../utils/auth';

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err || _.isNull(user)) {
      res.status(401);
      res.json({ error: 'Incorrect email or password' });
      return;
    }

    if (validPassword(req.body.password, user.password)) {
      res.json({
        user: {
          id: user._id,
          email: user.email
        },
        token: generateToken(user._id)
      });
    } else {
      res.status(401);
      res.json({ error: 'Incorrect email or password' });
    }
  });
});

router.patch('/password', (req: express.Request, res: express.Response) => {
  auth(req).then(async (user: IUser) => {
    await User.updateOne({ _id: user._id }, { password: generateHash(req.body.password) });
    const u = await User.findById(user._id);

    res.json({ user: { id: u._id, email: u.email } });
  });
});

export default router;
