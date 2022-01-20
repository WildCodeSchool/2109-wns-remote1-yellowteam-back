import express from 'express';

import cors from 'cors';

const app = express();

App.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => res.status(200).send('Hello World'));

export default app;

