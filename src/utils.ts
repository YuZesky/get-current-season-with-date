/**
 * @author kennebec
 * @see https://stackoverflow.com/a/5671172
 * @param {number} j
 * @param {any} n
 * @returns {Array}
 */
export function createJulianArray(j: number, n?: any): number[] {
	let j2, JA, JB, a, b, c, d, e, f, g, h, z;

	j += 0.5;
	j2 = (j - Math.floor(j)) * 86400.0;
	z = Math.floor(j);
	f = j - z;

	if (z < 2299161) {
		a = z;
	} else {
		g = Math.floor((z - 1867216.25) / 36524.25);
		a = z + 1 + g - Math.floor(g / 4);
	}

	b = a + 1524;
	c = Math.floor((b - 122.1) / 365.25);
	d = Math.floor(365.25 * c);
	e = Math.floor((b - d) / 30.6001);
	h = Math.floor(e < 14 ? e - 1 : e - 13);

	JA = [Math.floor(h > 2 ? c - 4716 : c - 4715), h - 1, Math.floor(b - d - Math.floor(30.6001 * e) + f)];
	JB = [Math.floor(j2 / 3600), Math.floor((j2 / 60) % 60), Math.round(j2 % 60)];

	JA = JA.concat(JB);

	if (typeof n == 'number') return JA.slice(0, n);

	return JA;
}

/**
 * Get a date from a Julian array
 * @author kennebec
 * @see https://stackoverflow.com/a/5671172
 * @param {Array} julianArray
 * @returns {Date}
 */
export function dateFromJulianArray(julianArray: number[]): Date {
	let j = +julianArray + 30.0 / (24 * 60 * 60);
	let A = createJulianArray(j, true);

	// @ts-ignore
	return new Date(Date.UTC.apply(Date, A));
}

/**
 * @author kennebec
 * @see https://stackoverflow.com/a/5671172
 * @param {number} x
 * @returns {number}
 */
export function degRad(x: number) {
	return (x * Math.PI) / 180.0;
}

/**
 * @author kennebec
 * @see https://stackoverflow.com/a/5671172
 * @param {number} x
 * @returns {number}
 */
export function degCos(x: number) {
	return Math.cos(degRad(x));
}
