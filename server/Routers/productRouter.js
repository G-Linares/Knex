import express from 'express';
import dotenv from 'dotenv';
import { getNewId } from '../Utils/generalUtils.js';
// este contenedor contiene las funciones para MAriaDb y SQLITE3
import { Contenedor } from '../Class/Contenedor.js';

// Este Knex contiene las opciones para MariaDB, y asi mismo jala las variables de entorno para configurarla
import mariaKnex from '../Options/mariaDB.js';

const productosRouter = express.Router();
// el nombre de la tabla la puedes cambiar desde el .ENV
dotenv.config();

// la creacion del conetedor acepta los siguiente parametors
// 1.- Options de la BD ----- 2.- El nombre de la tabla ---- 3.- El nombre del Cliente de la DB
const mariadb = new Contenedor(mariaKnex, process.env.T_OBJETOS, 'mariaDB');

// jala toda la informacion de todos los items
productosRouter.get('/', async (req, res) => {
	try {
		const allCurrentItems = await mariadb.listAllProducts();
		res.status(200).json(allCurrentItems);
	} catch (e) {
		res.status(500).json({ status: 'error', message: 'Algo salio mal' });
	}
});

// aqui se crea un item con un item unico
productosRouter.post('/', async (req, res) => {
	const incomingItem = req.body;
	try {
		const allCurrentItems = await mariadb.listAllProducts();
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
