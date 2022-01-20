/* eslint-disable no-console */
import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import notificationSocketHandler from './utils/socket/notification.handler';
import taskCompleteSocketHandler from './utils/socket/task-complete.handler';

const app = express();

app.use(express.json());

export const httpServer = createServer(app);

export const io = new Server(httpServer, {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
  cors: {
    credentials: true,
    origin: 'http://localhost:5000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('notification', (msg) => notificationSocketHandler(msg, socket));

  socket.on('task-complete', () => taskCompleteSocketHandler(socket));
});

export default app;
