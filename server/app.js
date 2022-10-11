import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productosRouter from './Routers/productRouter.js';
import mensajesRouter from './Routers/mensajesRouter.js';

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

app.use('/api/productos', productosRouter);
app.use('/api/mensajes', mensajesRouter);

const localServer = app.listen(PORT, () => {
	console.log(
		`Servidor http escuchando en el puerto ${localServer.address().port}`
	);
});
localServer.on('error', (error) => console.log(`Error en servidor ${error}`));
