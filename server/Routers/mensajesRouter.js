import express from 'express';
// Este Knex contiene las opciones para SQLITE3
import myOtherKnex from '../Options/sqliteDB.js';

const mensajesRouter = express.Router();
// el nombre de la tabla la puedes cambiar desde el .ENV

// jala toda la informacion de todos los items
mensajesRouter.get('/', (req, res) => {
	res.send('pong');
});

export default mensajesRouter;
