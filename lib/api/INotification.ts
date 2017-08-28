import { IFilter } from "api/IFilter";

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

/**
 * Notification
 *
 * @export
 * @interface INotification
 * @see https://documentation.onesignal.com/reference#create-notification
 */
export interface INotification {
  /**
   * The segment names you want to target.
   * Users in these segments will receive a notification.
   *
   * @type {string[]}
   * @memberof INotification
   */
  included_segments?: string[];
  /**
   * Segment that will be excluded when sending.
   * Users in these segments will not receive a notification.
   *
   * @type {string[]}
   * @memberof INotification
   */
  excluded_segments?: string[];
  /**
   * The filters parameter targets notification recipients.
   * Filters can be combined together to form advanced, highly precise user targeting.
   * This filter targeting parameter cannot be combined with any other targeting parameters.
   *
   * @type {IFilter[]}
   * @memberof INotification
   */
  filters?: IFilter[];
  /**
   * Specific players to send your notification to.
   * Do not combine with other targeting parameters. Not compatible with any other targeting parameters.
   *
   * @type {string[]}
   * @memberof INotification
   */
  include_player_ids?: string[];
  /**
   * OneSignal application ID
   *
   * @type {string}
   * @memberof INotification
   */
  app_id: string | undefined;
  /**
   * An array of OneSignal app IDs. All users within these apps will receive at most one notification.
   * No targeting parameters may be used when using the `app_ids` parameter. All subscribed users will receive the notification.
   *
   * @type {string[]}
   * @memberof INotification
   */
  app_ids?: string[];
  /**
   * The notification's content (excluding the title), a map of language codes to text for each language.
   *
   * @type {Ii18n}
   * @memberof INotification
   * @example JSON
   * {"en": "English Message", "es": "Mensaje en Español"}
   */
  contents: Ii18n;
  /**
   * The notification's title, a map of language codes to text for each language.
   *
   * @type {Ii18n}
   * @memberof INotification
   * @example JSON
   * {"en": "English Title", "es": "Titulo en español"}
   */
  headings?: Ii18n;
  /**
   * The `template_id` is the UUID of a template.
   *
   * @type {string}
   * @memberof INotification
   */
  template_id?: string;
}
