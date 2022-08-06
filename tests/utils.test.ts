import { getLocaleFile } from '../src/utils';

describe('test getLocaleFile function', () => {
	it('should return french locales', () => {
		expect(getLocaleFile('fra')).toStrictEqual({
			'1': 'printemps',
			'2': 'été',
			'3': 'automne',
			'4': 'hiver'
		});
	});

	it('should throw error with non-existent locales', () => {
		const err = () => getLocaleFile('abcd');

		expect(err).toThrow('Locale abcd was not found');
	});
});
