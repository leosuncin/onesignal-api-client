/**
 * Notification to segments
 *
 * @export
 * @see https://documentation.onesignal.com/reference#section-send-to-segments
 */
export interface ISegments {
  /**
   * The segment names you want to target.
   * Users in these segments will receive a notification.
   */
  included_segments: string[];
  /**
   * Segment that will be excluded when sending.
   * Users in these segments will not receive a notification.
   */
  excluded_segments?: string[];
}
