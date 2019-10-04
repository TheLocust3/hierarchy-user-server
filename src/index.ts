import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';
import userRoutes from './routes/user';

const app = express();
const port = process.env.PORT || 4002;

app.use(cors());

app.use('/api/v1/auth/', authRoutes);
app.use('/api/v1/user/', userRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
