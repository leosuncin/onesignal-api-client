/**
 * Notification to specific devices
 *
 * @export
 * @see https://documentation.onesignal.com/reference#section-send-to-specific-devices
 */
export interface IDevices {
  /**
   * Specific players to send your notification to.
   * Do not combine with other targeting parameters. Not compatible with any other targeting parameters.
   */
  include_player_ids: string[];
  /**
   * Target using iOS device tokens.
   *
   * @deprecated NOT RECOMMENDED - Please consider using `include_player_ids` instead.
   */
  include_ios_tokens?: string[];
  /**
   * Target using Windows Phone 8.0 URIs.
   *
   * @deprecated NOT RECOMMENDED - Please consider using `include_player_ids` instead.
   */
  include_wp_urls?: string[];
  /**
   * Target using Windows Phone 8.1 URIs.
   *
   * @deprecated NOT RECOMMENDED - Please consider using `include_player_ids` instead.
   */
  include_wp_wns_uris?: string[];
  /**
   * Target using Chrome Web Push registration IDs.
   *
   * @deprecated NOT RECOMMENDED Please consider using `include_player_ids` instead.
   */
  include_amazon_reg_ids?: string[];
  /**
   * Target using Chrome App registration IDs.
   *
   * @deprecated NOT RECOMMENDED Please consider using `include_player_ids` instead.
   */
  include_chrome_reg_ids?: string[];
  /**
   * Target using Chrome Web Push registration IDs.
   *
   * @deprecated NOT RECOMMENDED Please consider using `include_player_ids` instead.
   */
  include_chrome_web_reg_ids?: string[];
  /**
   * Target using Android device registration IDs.
   *
   * @deprecated NOT RECOMMENDED Please consider using `include_player_ids` instead.
   */
  include_android_reg_ids?: string[];
}
