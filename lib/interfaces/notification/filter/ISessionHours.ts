/**
 * Filter by when was first or last session
 *
 * @export
 */
export interface ISessionHours {
  /**
   * Filter by when was first or last session
   */
  field: "last_session" | "first_session";
  /**
   * Condition to agree.
   */
  relation: ">" | "<";
  /**
   * Number of hours before or after the users last or first session.
   *
   * @example "1.1"
   */
  hours_ago: string;
}
