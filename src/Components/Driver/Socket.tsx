// socketService.js
import io from 'socket.io-client';

const socket = io('https://muhammedanas.online'); 
socket.on('connect', () => {
    console.log('Socket connected');
});
socket.on('disconnect', () => {
    console.log('Disconnected from server.');
});
socket.on('error', (error) => {
    console.error('Socket connection error:', error);
});
console.log("This is socket =>" , socket);
export default socket;