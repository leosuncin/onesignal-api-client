/**
 * Filter by count sessions
 *
 * @export
 */
export interface ISessionCount {
  /**
   * Filter by session count
   */
  field: "session_count";
  /**
   * Condition to agree.
   */
  relation: ">" | "<" | "=" | "!=";
  /**
   * Number of sessions.
   *
   * @example "1"
   */
  value: string;
}
