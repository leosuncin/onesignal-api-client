import { IAndroidBackground } from "interfaces/common/IAndroidBackground";

/**
 * These parameters let you adjust notification icons, sounds, badges, and other appearance changes to your notifications.
 *
 * @export
 * @interface IAppearance
 * @see https://documentation.onesignal.com/reference#section-appearance
 */
export interface IAppearance {
  /**
   * The Android O Notification Category to send the notification under.
   *
   * @type {string}
   * @memberof IAppearance
   * @see https://documentation.onesignal.com/docs/android-notification-categories
   */
  android_channel_id?: string;
  /**
   * Allowing setting a background image for the notification.
   *
   * @type {IAndroidBackground}
   * @memberof IAppearance
   * @example {"image": "https://domain.com/background_image.jpg", "headings_color": "FFFF0000", "contents_color": "FF00FF00"}
   */
  android_background_layout?: IAndroidBackground;
  /**
   * If not set a bell icon will be used or `ic_stat_onesignal_default` if you have set this resource name.
   *
   * @type {string}
   * @memberof IAppearance
   * @see https://documentation.onesignal.com/docs/android-customizations#section-small-notification-icons
   */
  small_icon?: string;
  /**
   * If blank the `small_icon` is used. Can be a drawable resource name or a URL.
   *
   * @type {string}
   * @memberof IAppearance
   * @see https://documentation.onesignal.com/docs/android-customizations#section-large-notification-icons
   */
  large_icon?: string;
  /**
   * If not set a bell icon will be used or `ic_stat_onesignal_default` if you have set this resource name.
   *
   * @type {string}
   * @memberof IAppearance
   * @see https://documentation.onesignal.com/docs/android-customizations#section-small-notification-icons
   */
  adm_small_icon?: string;
  /**
   * If blank the `small_icon` is used. Can be a drawable resource name or a URL.
   *
   * @type {string}
   * @memberof IAppearance
   * @see https://documentation.onesignal.com/docs/android-customizations#section-large-notification-icons
   */
  adm_large_icon?: string;
  /**
   * Sets the web push notification's icon. An image URL linking to a valid image.
   *
   * @type {string}
   * @memberof IAppearance
   */
  chrome_web_icon?: string;
  /**
   * Sets the web push notification's large image to be shown below the notification's title and text.
   *
   * @type {string}
   * @memberof IAppearance
   * @see https://documentation.onesignal.com/docs/web-push-notification-icons
   */
  chrome_web_image?: string;
  /**
   * Sets the web push notification's icon for Firefox. An image URL linking to a valid image.
   *
   * @type {string}
   * @memberof IAppearance
   * @deprecated NOT RECOMMENDED Few people need to set Firefox-specific icons.
   * We recommend setting `chrome_web_icon` instead, which Firefox will also use.
   */
  firefox_icon?: string;
  /**
   * The local URL to an icon to use. If blank, the app icon will be used.
   *
   * @type {string}
   * @memberof IAppearance
   * @deprecated THIS FLAG IS NOT USED FOR WEB PUSH For web push, please see `chrome_web_icon` instead.
   */
  chrome_icon?: string;
  /**
   * Sound file that is included in your app to play instead of the default device notification sound.
   * Pass `nil` to disable vibration and sound for the notification.
   *
   * @type {string}
   * @memberof IAppearance
   * @example "notification.wav"
   */
  ios_sound?: string;
  /**
   * Sound file that is included in your app to play instead of the default device notification sound.
   * Pass `nil` to disable vibration and sound for the notification.
   *
   * @type {string}
   * @memberof IAppearance
   * @example "notification"
   */
  android_sound?: string;
  /**
   * Sound file that is included in your app to play instead of the default device notification sound.
   * Pass `nil` to disable vibration and sound for the notification.
   *
   * @type {string}
   * @memberof IAppearance
   * @example "notification"
   */
  adm_sound?: string;
  /**
   * Sound file that is included in your app to play instead of the default device notification sound.
   *
   * @type {string}
   * @memberof IAppearance
   */
  wp_sound?: string;
  /**
   * Sound file that is included in your app to play instead of the default device notification sound.
   *
   * @type {string}
   * @memberOf IAppearance
   * @example "notification.wav"
   */
  wp_wns_sound?: string;
  /**
   * Sets the devices LED notification light if the device has one. ARGB Hex format.
   *
   * @type {string}
   * @memberof IAppearance
   * @example "FF0000FF"
   */
  android_led_color?: string;
  /**
   * Sets the background color of the notification circle to the left of the notification text.
   * Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.
   *
   * @type {string}
   * @memberof IAppearance
   * @example "FFFF0000"
   */
  android_accent_color?: string;
  /**
   * Sets the lock screen visibility for apps targeting Android API level 21+ running on Android 5.0+ devices.
   * 1 = Public (default)
   *             Shows the full message on the lock screen unless the user
   *             has disabled all notifications from showing on the lock screen.
   *             Please consider the user and mark private if the contents are.
   * 0 = Private
   *             Hides message contents on lock screen if the user set
   *             "Hide sensitive notification content" in the system settings.
   * -1 = Secret
   *             Notification does not show on the lock screen at all
   *
   * @type {number = 1, 0, -1}
   * @memberof IAppearance
   */
  android_visibility?: 0 | 1 | -1;
  /**
   * Describes whether to set or increase/decrease your app's iOS badge count by
   * the `ios_badgeCount` specified count. Can specify "None", "SetTo", or "Increase".
   *    "None"     leaves the count unaffected.
   *    "SetTo"    directly sets the badge count to the number specified in ios_badgeCount.
   *    "Increase" adds the number specified in ios_badgeCount to the total.
   *               Use a negative number to decrease the badge count.
   *
   * @type {string = "None", "SetTo", "Increase"}
   * @memberof IAppearance
   */
  ios_badgeType?: "None" | "SetTo" | "Increase";
  /**
   * Used with `ios_badgeType`, describes the value to set or amount to increase/decrease
   * your app's iOS badge count by.
   * You can use a negative number to decrease the badge count when used with an
   * `ios_badgeType` of Increase.
   *
   * @type {number}
   * @memberof IAppearance
   */
  ios_badgeCount?: number;
  /**
   * Only one notification with the same id will be shown on the device.
   * Use the same id to update an existing notification instead of showing a new one.
   *
   * @type {string}
   * @memberof IAppearance
   */
  collapse_id?: string;
}
