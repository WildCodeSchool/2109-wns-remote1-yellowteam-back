import express from 'express';
import cors from 'cors';
import { port } from './settings';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/dummy-endpoint', (req, res) =>
  res.send({
    message: 'Hello from the backend',
  })
);

app.listen(port, () => console.log(`listening on ${port}`));
