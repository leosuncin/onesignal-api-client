/**
 * Filter by language
 *
 * @export
 * @interface ILang
 */
export interface ILang {
  /**
   * Filter by language
   *
   * @type {string = "language"}
   * @memberof ILang
   */
  field: "language";
  /**
   * Condition to agree.
   *
   * @type {string = "=", "!="}
   * @memberof ILang
   */
  relation: "=" | "!=";
  /**
   * Two character language code.
   *
   * @type {string}
   * @memberof ILang
   * @see https://documentation.onesignal.com/docs/language-localization
   * @example "en"
   */
  value: string;
}
