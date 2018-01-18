/**
 * Filter by language
 *
 * @export
 */
export interface ILang {
  /**
   * Filter by language
   */
  field: "language";
  /**
   * Condition to agree.
   */
  relation: "=" | "!=";
  /**
   * Two character language code.
   *
   * @see https://documentation.onesignal.com/docs/language-localization
   * @example "en"
   */
  value: string;
}
