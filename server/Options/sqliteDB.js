import knex from 'knex';

// estos valores no tienen que estar hardcodeados, luego los cambio
const sqliteKnex = knex({
	client: 'sqlite3',
	connection: {
		filename: './DB/mensajes.db3',
	},
	useNullAsDefault: true,
});

export default sqliteKnex;
