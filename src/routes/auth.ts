import _ from 'lodash';
import express from 'express';

import { validPassword, generateToken } from '../utils/auth';
import User from '../models/user';

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err || _.isNull(user)) {
      res.status(403);
      res.json({ error: 'Incorrect email or password' });
      return;
    }

    if (validPassword(req.body.password, user.password)) {
      res.json({
        user: {
          id: user._id,
          email: user.email,
          token: generateToken(user._id)
        }
      });
    } else {
      res.status(403);
      res.json({ error: 'Incorrect email or password' });
    }
  });
});

router.patch('/password', (req: express.Request, res: express.Response) => {
  // TODO: change user password
  res.json({ user: { email: 'jake.kinsella@gmail.com', name: 'Jake Kinsella' } });
});

export default router;
