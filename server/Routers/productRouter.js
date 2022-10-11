import express from 'express';

const productosRouter = express.Router();

productosRouter.get('/ping', (req, res) => {
	res.send('pong');
});

export default productosRouter;
