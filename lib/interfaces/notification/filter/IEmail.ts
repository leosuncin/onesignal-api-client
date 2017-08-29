/**
 * Filter by email
 *
 * @export
 * @interface IEmail
 */
export interface IEmail {
  /**
   * Filter by email
   *
   * @type {string = "email"}
   * @memberof IEmail
   */
  field: "email";
  /**
   * Email address
   *
   * @type {string}
   * @memberof IEmail
   */
  value: string;
}
