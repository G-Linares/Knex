import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

// estos valores no tienen que estar hardcodeados, luego los cambio
const mariaKnex = knex({
	client: 'mysql',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	},
	pool: { min: 0, max: 10 },
});

export default mariaKnex;
