import { Contenedor } from '../Class/Contenedor.js';
import sqliteKnex from '../Options/sqliteDB.js';

const sqlite = new Contenedor(sqliteKnex, process.env.T_MENSAJES, 'sqlite3');

export const socketLogic = async (socket) => {
	console.log(`Usuario conectado con ID: ${socket.id}`);
	// aqui se recuperan todos los mensajes que se han mandado
	try {
		const allCurrentMessages = await sqlite.listAllMessages();
		socket.emit('recover_conversation', allCurrentMessages);
	} catch (e) {
		console.error(e);
	}

	socket.on('send_message', async (data) => {
		await sqlite.addOne(data);
		socket.emit('receive_message', data);
		socket.broadcast.emit('receive_message', data);
	});

	socket.on('disconnect', () => {
		console.log('Usuario desconectado:', socket.id);
	});
};

// const DummyData = [
// 	{ message: 'Hola, buenas tardes', sender: 'GL', date: '2022-01-16' },
// 	{ message: 'Hola, como estas?', sender: 'LG', date: '2022-01-16' },
// ];
