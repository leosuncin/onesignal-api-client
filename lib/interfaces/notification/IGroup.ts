import { Ii18n } from "interfaces/common/Ii18n";

/**
 * Grouping lets you combine multiple notifications into a single notification.
 *
 * @export
 * @interface IGroup
 * @see https://documentation.onesignal.com/reference#section-grouping-collapsing
 */
export interface IGroup {
  /**
   * All notifications with the same group will be stacked together using
   * Android's [Notification Stacking](https://developer.android.com/training/wearables/notifications/stacks.html) feature.
   *
   * @type {string}
   * @memberof IGroup
   */
  android_group?: string;
  /**
   * Summary message to display when 2+ notifications are stacked together.
   * Default is "# new messages".
   *
   * @type {Ii18n}
   * @memberof IGroup
   * @example {"en": "You have $[notif_count] new messages"}
   */
  android_group_message?: Ii18n;
  /**
   * All notifications with the same group will be stacked together using
   * Android's [Notification Stacking](https://developer.android.com/training/wearables/notifications/stacks.html) feature.
   *
   * @type {string}
   * @memberof IGroup
   */
  adm_group?: string;
  /**
   * Summary message to display when 2+ notifications are stacked together.
   * Default is "# new messages".
   *
   * @type {Ii18n}
   * @memberof IGroup
   * @example {"en": "You have $[notif_count] new messages"}
   */
  adm_group_message?: Ii18n;
}
