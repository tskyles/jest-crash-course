function filterByTerm(inputArr, searchTerm) {
	const regex = new RegExp(searchTerm, 'i');
	if (!searchTerm) throw Error('searchTerm cannot be empty');
	if (!inputArr.length) throw Error('inputArr cannot be empty');
	return inputArr.filter(function(arrayElement) {
		return arrayElement.url.match(regex);
	});
}

module.exports = filterByTerm;
