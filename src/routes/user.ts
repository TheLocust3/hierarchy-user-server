import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.json({ user: { email: 'jake.kinsella@gmail.com', name: 'Jake Kinsella' } });
});

router.patch('/', (req: express.Request, res: express.Response) => {
  res.json({ user: { email: 'jake.kinsella@gmail.com', name: 'Jake Kinsella' } });
});

export default router;
