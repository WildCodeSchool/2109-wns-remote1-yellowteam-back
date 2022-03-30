import express from 'express';
import cors from 'cors';
import whitelist from './constants/cors.whitelist';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, check?: boolean) => Error | void
  ) => {
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin as string) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  exposedHeaders: ['x-authorization'],
};

app.use(cors(corsOptions));

app.get('/', (req, res) => res.status(200).send('Hello World'));

export default app;
