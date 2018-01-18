import { IMap } from "interfaces/common/IMap";

/**
 * Additional content attached to notifications, primarily images.
 *
 * @export
 * @see https://documentation.onesignal.com/reference#section-attachments
 */
export interface IAttachments {
  /**
   * A custom map of data that is passed back to your app.
   *
   * @example {"abc": "123", "foo": "bar"}
   */
  data?: IMap;
  /**
   * The URL to open in the browser when a user clicks on the notification.
   *
   * @example "http://www.google.com"
   */
  url?: string;
  /**
   * Adds media attachments to notifications.
   *
   * @example {"id1": "https://domain.com/image.jpg"}
   */
  ios_attachments?: IMap;
  /**
   * Picture to display in the expanded view.
   * Can be a drawable resource name or a URL.
   */
  big_picture?: string;
  /**
   * Picture to display in the expanded view.
   * Can be a drawable resource name or a URL.
   */
  adm_big_picture?: string;
  /**
   * Large picture to display below the notification text.
   * Must be a local URL.
   */
  chrome_big_picture?: string;
}
