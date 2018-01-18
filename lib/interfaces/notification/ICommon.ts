/**
 * Common parameters to all methods of targeting users.
 *
 * @export
 */
export interface ICommon {
  /**
   * OneSignal application ID.
   */
  app_id: string;
  /**
   * An array of OneSignal app IDs. All users within these apps will receive at most one notification.
   * No targeting parameters may be used when using the `app_ids` parameter. All subscribed users will receive the notification.
   */
  app_ids?: string[];
}
