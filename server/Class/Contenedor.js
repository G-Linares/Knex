// este contenedor corresponde para el uso de productos, no le cambie el nombre por flojera
export class Contenedor {
	constructor(db, tableName, dbClient) {
		this.db = db;
		this.tableName = tableName;
		// con este switch puedo crear las dos tablas de datos dinamicamente decidiendo cual dependiendo el parametro, en este caso llamo las dos, pero puedo incluir mas
		switch (dbClient) {
			case 'mariaDB':
				this.db.schema
					.createTable('objetos', (table) => {
						table.increments('id');
						table.string('title');
						table.string('thumbnail');
						table.integer('price');
					})
					.then(() => console.log('Tablas de MariaDB Creadas'))
					.catch((response) => {
						console.log('Tabla de Maria DB Ya Existe');
					});
				break;
			case 'sqlite3':
				this.db.schema
					.createTable('mensajes', (table) => {
						table.increments('id');
						table.string('message');
						table.string('timestamp');
					})
					.then(() => console.log('Tablas de Sqlite3 Creadas'))
					.catch((response) => {
						console.log('Tabla de Sqlite3 Ya Existe');
					});
				break;
		}
	}

	async listAllMessages() {
		const allCurrentMessages = await this.db(this.tableName).select(
			'id',
			'message',
			'timestamp'
		);
		return allCurrentMessages;
	}

	// solo para uso en ejercicio de productos, no para mensajes
	async listAllProducts() {
		const allCurrentItems = await this.db(this.tableName).select(
			'id',
			'title',
			'thumbnail',
			'price'
		);
		return allCurrentItems;
	}

	async addOne(itemToAdd) {
		return await this.db.insert(itemToAdd).into(this.tableName);
	}

	async deleteOne(itemID) {
		return await this.db(this.tableName).where('id', '=', itemID).del();
	}
}
