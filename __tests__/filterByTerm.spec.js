const filterByTerm = require('../src/filterByTerm');

describe('Filter Function', () => {
	test('It should filter by a search term (link)', () => {
		const input = [
			{ id: 1, url: 'https://www.url1.dev' },
			{ id: 2, url: 'https://www.url2.dev' },
			{ id: 3, url: 'https://www.link3.dev' }
		];

		const output = [{ id: 3, url: 'https://www.link3.dev' }];

		expect(filterByTerm(input, 'link')).toEqual(output);
		expect(filterByTerm(input, 'Link')).toEqual(output);
	});
	test('It should filter by a search term (uRl)', () => {
		const input = [
			{ id: 1, url: 'https://www.url1.dev' },
			{ id: 2, url: 'https://www.url2.dev' },
			{ id: 3, url: 'https://www.link3.dev' }
		];

		const output = [
			{ id: 1, url: 'https://www.url1.dev' },
			{ id: 2, url: 'https://www.url2.dev' }
		];

		expect(filterByTerm(input, 'uRl')).toEqual(output);
	});
});
