import express from 'express';

import User, { IUser } from '../models/user';
import { auth } from '../utils/auth';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  auth(req)
    .then((user: IUser) => {
      res.json({ user: { id: user._id, email: user.email } });
    })
    .catch(() => {
      res.status(401);
      res.json({ error: 'Incorrect email or password' });
    });
});

router.patch('/', (req: express.Request, res: express.Response) => {
  auth(req)
    .then(async (user: IUser) => {
      await User.updateOne({ _id: user._id }, { email: req.body.email });
      const u = await User.findById(user._id);

      res.json({ user: { id: u._id, email: u.email } });
    })
    .catch(() => {
      res.status(401);
      res.json({ error: 'Incorrect email or password' });
    });
});

export default router;
