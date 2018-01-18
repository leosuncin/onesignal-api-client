/**
 * To only send to specific platforms, you may pass in true on one or more of these
 * parameters corresponding to the platform you wish to send to. If you do so,
 * all other platforms will be set to false and will not be delivered to.
 *
 * @export
 */
export interface IPlatform {
  /**
   * Indicates whether to send to all devices registered under your app's Apple iOS platform.
   *
   * @defaultvalue true
   */
  isIos?: boolean;
  /**
   * Indicates whether to send to all devices registered under your app's Google Android platform.
   */
  isAndroid?: boolean;
  /**
   * Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari.
   * You may use this instead as a combined flag instead of separately enabling isChromeWeb,
   * isFirefox, and isSafari, though the three options are equivalent to this one.
   */
  isAnyWeb?: boolean;
  /**
   * Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users
   * registered under your Chrome & Firefox web push platform.
   */
  isChromeWeb?: boolean;
  /**
   * Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.
   */
  isFirefox?: boolean;
  /**
   * Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.
   * DOES NOT SUPPORT IOS SAFARI.
   *
   * @see https://documentation.onesignal.com/docs/why-doesnt-web-push-work-with-ios
   */
  isSafari?: boolean;
  /**
   * Indicates whether to send to all devices registered under your app's Windows Phone 8.0 platform.
   */
  isWP?: boolean;
  /**
   * Indicates whether to send to all devices registered under your app's Windows Phone 8.1+ platform.
   */
  isWP_WNS?: boolean;
  /**
   * Indicates whether to send to all devices registered under your app's Amazon Fire platform.
   */
  isAdm?: boolean;
  /**
   * Indicates whether to send to all devices registered under your app's Google Chrome Apps & Extension platform.
   * THIS FLAG IS NOT USED FOR WEB PUSH Please see `isChromeWeb` for sending to web push users.
   */
  isChrome?: boolean;
}
