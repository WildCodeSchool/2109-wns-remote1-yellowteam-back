import { AnyNaptrRecord } from 'dns';

const notificationSocketHandler = (msg: AnyNaptrRecord, socket) => {
  console.log(msg);

  socket.emit('notification', { message: 'HELLOOOO BOOOOOY' });
};
export default notificationSocketHandler;
