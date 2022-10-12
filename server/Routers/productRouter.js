import express from 'express';
import dotenv from 'dotenv';
import { getNewId } from '../Utils/generalUtils.js';

// este contenedor contiene las funciones para MAriaDb
import { Contenedor } from '../Class/Contenedor.js';
// Este Knex contiene las opciones para MariaDB, y asi mismo jala las variables de entorno para configurarla
import mariaKnex from '../Options/mariaDB.js';

const productosRouter = express.Router();
// el nombre de la tabla la puedes cambiar desde el .ENV
dotenv.config();

// aqui se cre la clase con la tabla para la DB y su clase para las funciones

const mariadb = new Contenedor(mariaKnex, process.env.DB_TABLE_NAME);

// jala toda la informacion de todos los items
productosRouter.get('/', async (req, res) => {
	try {
		const allCurrentItems = await mariadb.listAll();
		res.status(200).json(allCurrentItems);
	} catch (e) {
		res.status(500).json({ status: 'error', message: 'Algo salio mal' });
	}
});

// aqui se crea un item con un item unico
productosRouter.post('/', async (req, res) => {
	const incomingItem = req.body;
	try {
		const allCurrentItems = await mariadb.listAll();
		const itemToAdd = {
			...incomingItem,
			id: getNewId(allCurrentItems),
		};
		await mariadb.addOne(itemToAdd);
		res.status(200).json({ staus: 'success', message: 'Item agregado' });
	} catch (e) {
		res.status(500).json({ status: 'error', message: 'Algo salio mal' });
	}
});

// no estan protegidas las rutas, puedes eliminarlo desde URL
// no lo voy a implementar para este ejercicio
productosRouter.delete('/:id', async (req, res) => {
	const itemId = parseInt(req.params.id, 10);
	try {
		await mariadb.deleteOne(itemId);
		res
			.status(200)
			.json({ status: 'OK', message: 'Item Borrado Satisfactoriamente' });
	} catch (error) {
		res.status(500).json({ status: 'error', message: 'No se pudo eliminar' });
	}
});

export default productosRouter;
