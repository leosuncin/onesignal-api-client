/**
 * Filter by when was first or last session
 *
 * @export
 * @interface ISessionHours
 */
export interface ISessionHours {
  /**
   * Filter by when was first or last session
   *
   * @type {string = "last_session", "first_session"}
   * @memberof ISessionHours
   */
  field: "last_session" | "first_session";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<"}
   * @memberof ISessionHours
   */
  relation: ">" | "<";
  /**
   * Number of hours before or after the users last or first session.
   *
   * @type {string}
   * @memberof ISessionHours
   * @example "1.1"
   */
  hours_ago: string;
}
