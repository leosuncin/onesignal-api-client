/**
 * Filter by session duration
 *
 * @export
 * @interface ISessionTime
 */
export interface ISessionTime {
  /**
   * Filter by session time
   *
   * @type {string = "session_time"}
   * @memberof ISessionTime
   */
  field: "session_time";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<"}
   * @memberof ISessionTime
   */
  relation: ">" | "<";
  /**
   * Time in seconds the user has been in your app.
   *
   * @type {string}
   * @memberof ISessionTime
   * @example "3600"
   */
  value: string;
}
