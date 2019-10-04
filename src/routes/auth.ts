import express from 'express';

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
  res.json({ user: { email: 'jake.kinsella@gmail.com', name: 'Jake Kinsella' } });
});

router.delete('/', (req: express.Request, res: express.Response) => {
  res.json({ success: 'signed out' });
});

router.patch('/password', (req: express.Request, res: express.Response) => {
  res.json({ user: { email: 'jake.kinsella@gmail.com', name: 'Jake Kinsella' } });
});

export default router;
