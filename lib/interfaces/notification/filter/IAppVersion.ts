/**
 * Filter by application version
 *
 * @export
 * @interface IAppVersion
 */
export interface IAppVersion {
  /**
   * Filter by App version
   *
   * @type {string = "app_version"}
   * @memberof IAppVersion
   */
  field: "app_version";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<", "=", "!="}
   * @memberof IAppVersion
   */
  relation: ">" | "<" | "=" | "!=";
  /**
   * Application version
   *
   * @type {string}
   * @memberof IAppVersion
   * @example "1.0.0"
   */
  value: string;
}
