/**
 * Change notification delivery
 *
 * @export
 * @see https://documentation.onesignal.com/reference#section-delivery
 */
export interface IDelivery {
  /**
   * Schedule notification for future delivery.
   */
  send_after?: Date | string;
  /**
   * Possible values are:
   *    "timezone"    Deliver at a specific time-of-day in each users own timezone
   *    "last-active" Deliver at the same time of day as each user last used your app.
   *    "send-later"  Takes effect after the `send_after` time has elapsed.
   */
  delayed_option?: "timezone" | "last-active" | "send_after";
  /**
   * Use with delayed_option=timezone.
   *
   * @example "9:00AM"
   */
  delivery_time_of_day?: string;
  /**
   * Time To Live - In seconds.
   * The notification will be expired if the device does not come back online within this time.
   */
  ttl?: 259200;
  /**
   * Delivery priority through the push server (example GCM/FCM).
   * Pass 10 for high priority.
   * Defaults to normal priority for Android.
   * High for iOS.
   */
  priority?: number;
}
