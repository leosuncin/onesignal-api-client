/**
 * Filter by the amount spent In App Purchases
 *
 * @export
 * @interface IAmount
 */
export interface IAmount {
  /**
   * Filter by the amount spent on IAP
   *
   * @type {string = "amount_spent"}
   * @memberof IAmount
   */
  field: "amount_spent";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<", "="}
   * @memberof IAmount
   */
  relation: ">" | "<" | "=";
  /**
   * Amount in USD a user has spent on IAP (In App Purchases).
   *
   * @type {string}
   * @memberof IAmount
   * @example "0.99"
   */
  value: string;
}
