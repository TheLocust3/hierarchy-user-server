import express from 'express';

const app = express();
const port = 4002;

app.get('/', (req: any, res: any) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
