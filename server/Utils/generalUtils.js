export const getNewId = (allProducts) => {
	const lastItemId = allProducts.length;
	if (lastItemId === 0) {
		return 1;
	} else {
		return allProducts[lastItemId - 1].id + 1;
	}
};
