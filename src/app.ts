import express from 'express';
import api from './api/index';

const app = express();

app.use(api);

app.use(express.json());

export default app;
