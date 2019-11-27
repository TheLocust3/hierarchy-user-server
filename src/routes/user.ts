import express from 'express';

import { IUser } from '../models/user';
import { auth } from '../utils/auth';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  auth(req)
    .then((user: IUser) => {
      res.json({ user: { id: user._id, email: user.email, name: 'Jake Kinsella' } });
    })
    .catch(() => {
      res.status(403);
      res.json({ error: 'Incorrect email or password' });
    });
});

router.patch('/', (req: express.Request, res: express.Response) => {
  auth(req)
    .then((user: IUser) => {
      // TODO: edit user
      res.json({ user: { email: 'jake.kinsella@gmail.com', name: 'Jake Kinsella' } });
    })
    .catch(() => {
      res.status(403);
      res.json({ error: 'Incorrect email or password' });
    });
});

export default router;
