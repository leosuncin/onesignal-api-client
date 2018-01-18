/**
 * Filter by session duration
 *
 * @export
 */
export interface ISessionTime {
  /**
   * Filter by session time
   */
  field: "session_time";
  /**
   * Condition to agree.
   */
  relation: ">" | "<";
  /**
   * Time in seconds the user has been in your app.
   *
   * @example "3600"
   */
  value: string;
}
