import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

// estos valores no tienen que estar hardcodeados, luego los cambio
const myOtherKnex = knex({
	client: 'sqlite3',
	connection: {
		filename: '../DB/mensajes.sqlite',
	},
	pool: { min: 0, max: 10 },
});

export default myOtherKnex;
