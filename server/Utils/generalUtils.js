export const getNewId = (allProducts) => {
	const lastItemId = allProducts.length;
	if (lastItemId === 0) {
		return 1;
	} else {
		return allProducts[lastItemId - 1].id + 1;
	}
};

export function removeObjectWithId(arr, id) {
	const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
	if (objWithIdIndex !== -1) arr.splice(objWithIdIndex, 1);
	return arr;
}
