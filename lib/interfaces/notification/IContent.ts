import { Ii18n } from "interfaces/common/Ii18n";

/**
 * The content you want to send in notifications.
 *
 * @export
 * @interface IContent
 * @see https://documentation.onesignal.com/reference#section-content-language
 */
export interface IContent {
  /**
   * The notification's content (excluding the title), a map of language codes to text for each language.
   *
   * @type {Ii18n}
   * @memberof IContent
   * @example JSON
   * {"en": "English Message", "es": "Mensaje en Español"}
   */
  contents: Ii18n;
  /**
   * The notification's title, a map of language codes to text for each language.
   *
   * @type {Ii18n}
   * @memberof IContent
   * @example JSON
   * {"en": "English Title", "es": "Titulo en español"}
   */
  headings?: Ii18n;
  /**
   * The notification's subtitle, a map of language codes to text for each language.
   *
   * @type {Ii18n}
   * @memberof IContent
   * @example JSON
   * {"en": "English Title", "es": "Titulo en español"}
   */
  subtitle?: Ii18n;
  /**
   * The `template_id` is the UUID of a template.
   *
   * @type {string}
   * @memberof IContent
   */
  template_id?: string;
  /**
   * Sending `true` wakes your app from background to run custom native code.
   *
   * @type {boolean}
   * @memberof IContent
   */
  content_available?: boolean;
  /**
   * Sending `true` allows you to change the notification content in your app before it is displayed.
   *
   * @type {boolean}
   * @memberof IContent
   */
  mutable_content?: boolean;
}
