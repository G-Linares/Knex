import express from 'express';
import { Contenedor } from '../Class/Contenedor.js';
import sqliteKnex from '../Options/sqliteDB.js';

const mensajesRouter = express.Router();
// el nombre de la tabla la puedes cambiar desde el .ENV

const sqlite = new Contenedor(sqliteKnex, process.env.T_MENSAJES, 'sqlite3');
// jala toda la informacion de todos los items
mensajesRouter.get('/', async (req, res) => {
	try {
		const allCurrentMessages = await sqlite.listAllMessages();
		res.status(200).send(allCurrentMessages);
	} catch (e) {
		res.status(500).send({ status: 'error', message: 'algo salio mal' });
	}
});

export default mensajesRouter;
