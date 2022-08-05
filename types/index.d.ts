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
 * @see https://stackoverflow.com/a/5671172
 * @param {Array?} seasonsArray A seasons array
 * @param {GetSeasonByIdOptions?} options Options
 * @returns {localizedSeason?} Localized current season
 */
export declare function getSeasonByArray(seasonsArray?: number[], options?: GetSeasonByIdOptions): localizedSeason;
export * from './utils';
export declare type localizedSeason = 'spring' | 'summer' | 'fall' | 'winter';
export interface GetSeasonByIdOptions {
    locales: Object;
}
//# sourceMappingURL=index.d.ts.map