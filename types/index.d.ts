/**
 * Get the current seasons array
 * @author kennebec
 * @see https://stackoverflow.com/a/5671172
 * @param {Date?} date A date
 * @returns {Array} Seasons array
 */
export declare function getCurrentSeasonsArray(date?: Date): number[];
/**
 * Get the current season with the seasons array
 * @author apaul
 * @see http://jsfiddle.net/kynbvpLf/3/
 * @param {Array?} seasonsArray A seasons array
 * @returns {localizedSeason} Localized current season
 */
export declare function getCurrentSeasonIdByArray(seasonsArray?: number[]): number;
/**
 * Get the localized season by id
 * @param {number} seasonId A season Id
 * @param {GetSeasonByIdOptions} options Options
 * @returns {string} Localized season
 */
export declare function getSeasonById(seasonId: number, options?: GetSeasonByIdOptions): string;
export * from './utils';
export interface GetSeasonByIdOptions {
    lowercaseSeason?: boolean;
    locale?: object;
}
//# sourceMappingURL=index.d.ts.map