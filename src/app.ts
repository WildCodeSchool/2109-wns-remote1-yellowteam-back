import express from 'express';

import cors from 'cors';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.get('/', (req, res) => res.status(200).send('Hello World'));

export default app;
