export const socketLogic = (socket) => {
	console.log(`Usuario conectado con ID: ${socket.id}`);

	socket.on('send_message', (data) => {
		socket.emit('receive_message', data);
		socket.broadcast.emit('receive_message', data);
	});
	socket.on('disconnect', () => {
		console.log('Usuario desconectado:', socket.id);
	});
};
