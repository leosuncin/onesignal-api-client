/**
 * Filter by location
 *
 * @export
 * @interface ILocation
 */
export interface ILocation {
  /**
   * Filter by location
   *
   * @type {string = "location"}
   * @memberof ILocation
   */
  field: "location";
  /**
   * Radius in meters
   *
   * @type {string}
   * @memberof ILocation
   */
  radius: string;
  /**
   * Latitude
   *
   * @type {string}
   * @memberof ILocation
   */
  lat: string;
  /**
   * Longitude
   *
   * @type {string}
   * @memberof ILocation
   */
  long: string;
}
