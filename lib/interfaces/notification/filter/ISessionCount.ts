/**
 * Filter by count sessions
 *
 * @export
 * @interface ISessionCount
 */
export interface ISessionCount {
  /**
   * Filter by session count
   *
   * @type {string = "session_count"}
   * @memberof ISessionCount
   */
  field: "session_count";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<", "=", "!="}
   * @memberof ISessionCount
   */
  relation: ">" | "<" | "=" | "!=";
  /**
   * Number of sessions.
   *
   * @type {string}
   * @memberof ISessionCount
   * @example "1"
   */
  value: string;
}
