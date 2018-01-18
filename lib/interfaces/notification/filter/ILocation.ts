/**
 * Filter by location
 *
 * @export
 */
export interface ILocation {
  /**
   * Filter by location
   */
  field: "location";
  /**
   * Radius in meters
   */
  radius: string;
  /**
   * Latitude
   */
  lat: string;
  /**
   * Longitude
   */
  long: string;
}
