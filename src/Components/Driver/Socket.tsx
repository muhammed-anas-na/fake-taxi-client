// socketService.js
import io from 'socket.io-client';

const socket = io('http://localhost:8003');
socket.on('connect', () => {
    console.log('Socket connected');
});

socket.on('error', (error) => {
    console.error('Socket connection error:', error);
});

console.log("This is socket =>" , socket);
export default socket;