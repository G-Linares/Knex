export class Contenedor {
	constructor(db, tableName) {
		this.db = db;
		this.tableName = tableName;
		this.db.schema
			.createTable('objetos', (table) => {
				table.increments('id');
				table.string('title');
				table.string('thumbnail');
				table.integer('price');
			})
			.then(() => console.log('creada'))
			.catch((response) => {
				console.log('tabla ya esixte');
			});
	}

	async listAll() {
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
