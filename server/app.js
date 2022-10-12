import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';

import productosRouter from './Routers/productRouter.js';
import mensajesRouter from './Routers/mensajesRouter.js';
import { socketLogic } from './Utils/socketLogic.js';

dotenv.config();
// si existe la variable PORT o SOCKET_PORT en .env las toma y monta los servers en esos puertos
const PORT = process.env.PORT || 8080;
const SOCKET_PORT = process.env.SOCKET_PORT || 3001;
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// settings de socket.io -------
// declaramos un nuevo server excluisvo para los sockets.io
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});
io.on('connection', socketLogic); // en esta funcion esta toda la logica de sockets, la puse en utils, pero no se en donde va
/// socket.io setttingssss ---------

app.use('/api/productos', productosRouter);
app.use('/api/mensajes', mensajesRouter);

// voy a tener dos servers, uno especificamente para los sockets de sockets.io y otro para el CRUD normal
const localServer = app.listen(PORT, () => {
	server.listen(SOCKET_PORT, () => {
		console.log(`Servidor socket.io en el puerto: ${SOCKET_PORT}`);
	});
	console.log(`Servidor http en el puerto: ${localServer.address().port}`);
});
localServer.on('error', (error) => console.log(`Error en servidor ${error}`));
