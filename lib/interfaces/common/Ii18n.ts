/**
 * Internationalization for notification content
 *
 * @export
 * @interface Ii18n
 */
export interface Ii18n {
  /**
   * Two letters language code
   * @see https://documentation.onesignal.com/docs/language-localization
   * @type {[lang: string]: string}
   * @memberof Ii18n
   */
  [lang: string]: string;
}
