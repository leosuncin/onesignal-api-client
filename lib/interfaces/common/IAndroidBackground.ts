/**
 * Android background image for the notification.
 *
 * @export
 * @see https://documentation.onesignal.com/docs/android-customizations#section-background-images
 */
export interface IAndroidBackground {
  /**
   * Asset file, android resource name, or URL to remote image.
   *
   */
  image: string;
  /**
   * Title text color ARGB Hex format.
   *
   * @example "FF0000FF"
   */
  headings_color: string;
  /**
   * Body text color ARGB Hex format.
   *
   * @example "FFFF0000"
   */
  contents_color: string;
}
