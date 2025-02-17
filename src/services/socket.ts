import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'https://tasknestapp.onrender.com';
let socket: Socket;

export const initSocket = () => {
  socket = io(SOCKET_URL);
};

export const getSocket = (): Socket => {
  if (!socket) {
    throw new Error('Socket not initialized. Call initSocket() first.');
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};
