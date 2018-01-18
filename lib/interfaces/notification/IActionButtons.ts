import { IActionButton, IWebButton } from "interfaces/notification/button";

/**
 * Add buttons to notifications, allowing the user to take more than one action on a notification.
 *
 * @export
 */
export interface IActionButtons {
  /**
   * Action buttons to add to the notification. Icon only works for Android.
   */
  buttons?: IActionButton[];
  /**
   * Web buttons to add to the notification.
   */
  web_buttons?: IWebButton[];
  /**
   * Category APS payload
   *
   * @see https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIUserNotificationCategory_class/index.html#//apple_ref/occ/cl/UIUserNotificationCategory
   */
  ios_category?: string;
}
