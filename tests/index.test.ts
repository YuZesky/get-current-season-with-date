import { getCurrentSeasonsArray, getSeasonById } from '../src/index';

describe('test getCurrentSeasonsArray function', () => {
	it('should return seasons array for 2015-01-06 14:34:02 +08:08', () => {
		let timestamp = 1420526042; // 2015-01-06 14:34:02 +08:08
		let date = new Date(timestamp * 1000);

		expect(getCurrentSeasonsArray(date)).toStrictEqual([
			2015,
			new Date('2015-03-20T22:46:51.000Z'),
			new Date('2015-06-21T16:39:31.000Z'),
			new Date('2015-09-23T08:22:04.000Z'),
			new Date('2015-12-22T04:49:50.000Z')
		]);
	});

	it('should return seasons array for 2080-09-27 05:57:24 -06:00', () => {
		let timestamp = 3494663844; // 2080-09-27 05:57:24 -06:00
		let date = new Date(timestamp * 1000);

		expect(getCurrentSeasonsArray(date)).toStrictEqual([
			2080,
			new Date('2080-03-19T16:46:56.000Z'),
			new Date('2080-06-20T09:36:54.000Z'),
			new Date('2080-09-22T01:59:13.000Z'),
			new Date('2080-12-20T23:35:17.000Z')
		]);
	});
});

describe('test getSeasonById function', () => {
	it("should return 'automne' for 3 with french (with upper)", () => {
		expect(getSeasonById(3, { locale: 'fra' })).toStrictEqual('Automne');
	});

	it("should return 'invierno' for 4 with spanish (with upper)", () => {
		expect(getSeasonById(4, { locale: 'spa' })).toStrictEqual('Invierno');
	});

	it("should return 'estate' for 2 with italian (with lower)", () => {
		expect(getSeasonById(2, { locale: 'ita', lowercaseSeason: true })).toStrictEqual('estate');
	});

	it("should return 'spring' for 1 with english (with lower)", () => {
		expect(getSeasonById(1, { locale: 'eng', lowercaseSeason: true })).toStrictEqual('spring');
	});

	it("should return 'A' for 3 with custom locales", () => {
		expect(getSeasonById(3, { locale: { 3: 'a' } })).toStrictEqual('A');
	});
});
