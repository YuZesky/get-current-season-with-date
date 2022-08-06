import mergeObjects from 'merge-objects';
import ucfirst from 'ucfirst-js';
import { dateFromJulianArray, degCos, getLocaleFile } from './utils';

/**
 * Get the current seasons array
 * @author kennebec
 * @see https://stackoverflow.com/a/5671172
 * @param {Date?} date A date
 * @returns {Array} Seasons array
 */
export function getCurrentSeasonsArray(date?: Date): number[] {
	var currentYear = date?.getFullYear() || new Date().getFullYear();

	if (currentYear < 1000 || currentYear > 3000) throw new Error(`Year ${currentYear} is out of range`);

	var Y1 = (currentYear - 2000) / 1000,
		Y2 = Y1 * Y1,
		Y3 = Y2 * Y1,
		Y4 = Y3 * Y1;

	var jd,
		t,
		w,
		d,
		est = 0,
		i = 0,
		A = [currentYear],
		e1 = [485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8],
		e2 = [
			324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79,
			198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45
		],
		e3 = [
			1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562,
			31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074
		];

	while (i < 4) {
		switch (i) {
			case 0:
				jd = 2451623.80984 + 365242.37404 * Y1 + 0.05169 * Y2 - 0.00411 * Y3 - 0.00057 * Y4;
				break;
			case 1:
				jd = 2451716.56767 + 365241.62603 * Y1 + 0.00325 * Y2 + 0.00888 * Y3 - 0.0003 * Y4;
				break;
			case 2:
				jd = 2451810.21715 + 365242.01767 * Y1 - 0.11575 * Y2 + 0.00337 * Y3 + 0.00078 * Y4;
				break;
			case 3:
				jd = 2451900.05952 + 365242.74049 * Y1 - 0.06223 * Y2 - 0.00823 * Y3 + 0.00032 * Y4;
				break;
		}

		// @ts-ignore
		t = (jd - 2451545.0) / 36525;
		w = 35999.373 * t - 2.47;
		d = 1 + 0.0334 * degCos(w) + 0.0007 * degCos(2 * w);
		est = 0;

		for (var n = 0; n < 24; n++) {
			est += e1[n] * degCos(e2[n] + e3[n] * t);
		}

		// @ts-ignore
		jd += (0.00001 * est) / d;
		// @ts-ignore
		A[++i] = dateFromJulianArray(jd);
	}

	return A;
}

/**
 * Get the current season with the seasons array
 * @author apaul
 * @see http://jsfiddle.net/kynbvpLf/3/
 * @param {Array?} seasonsArray A seasons array
 * @returns {localizedSeason} Localized current season
 */
export function getCurrentSeasonIdByArray(seasonsArray?: number[]): number {
	var currentDate = new Date() as unknown;
	var seasonsArray = seasonsArray || getCurrentSeasonsArray();

	var firstSpring = seasonsArray[1];
	var firstSummer = seasonsArray[2];
	var firstFall = seasonsArray[3];
	var firstWinter = seasonsArray[4];

	if (currentDate >= firstSpring && currentDate < firstSummer) {
		return 1;
	} else if (currentDate >= firstSummer && currentDate < firstFall) {
		return 2;
	} else if (currentDate >= firstFall && currentDate < firstWinter) {
		return 3;
	} else if (currentDate >= firstWinter || currentDate < firstSpring) {
		return 4;
	}
}

/**
 * Get the localized season by id
 * @param {number} seasonId A season Id
 * @param {GetSeasonByIdOptions} options Options
 * @returns {string} Localized season
 */
export function getSeasonById(seasonId: number, options?: GetSeasonByIdOptions): string {
	let defaultLocale = getLocaleFile('eng');
	let locale, lowercaseSeason;

	if (options !== undefined) {
		if (options.locale !== undefined) {
			if (typeof options.locale === 'string') locale = getLocaleFile(options.locale);
			if (typeof options.locale === 'object') locale = mergeObjects(defaultLocale, options.locale);
		} else {
			locale = defaultLocale;
		}

		if (options.lowercaseSeason !== undefined) {
			lowercaseSeason = options.lowercaseSeason;
		} else {
			lowercaseSeason = false;
		}
	} else {
		locale = defaultLocale;
		lowercaseSeason = false;
	}

	let currentSeason = locale[seasonId];

	if (lowercaseSeason === true) {
		return currentSeason.toLowerCase();
	} else {
		return ucfirst(currentSeason);
	}
}

export * from './utils';

export interface GetSeasonByIdOptions {
	// Ensure that the first letter is in capital letters or lowercase. Default is false
	lowercaseSeason?: boolean;

	// Change the locale using ISO 639-2 code. Default is `eng`
	locale?: string | object;
}
