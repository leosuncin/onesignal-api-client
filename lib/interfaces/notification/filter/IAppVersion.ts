/**
 * Filter by application version
 *
 * @export
 */
export interface IAppVersion {
  /**
   * Filter by App version
   */
  field: "app_version";
  /**
   * Condition to agree.
   */
  relation: ">" | "<" | "=" | "!=";
  /**
   * Application version
   *
   * @example "1.0.0"
   */
  value: string;
}
