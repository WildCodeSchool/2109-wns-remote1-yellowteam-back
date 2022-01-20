const taskCompleteSocketHandler = (socket) => {
  socket.emit('notification', { message: 'Task complete' });
};

export default taskCompleteSocketHandler;
