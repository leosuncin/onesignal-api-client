/**
 * Filter by the amount spent In App Purchases
 *
 * @export
 */
export interface IAmount {
  /**
   * Filter by the amount spent on IAP
   */
  field: "amount_spent";
  /**
   * Condition to agree.
   */
  relation: ">" | "<" | "=";
  /**
   * Amount in USD a user has spent on IAP (In App Purchases).
   *
   * @example "0.99"
   */
  value: string;
}
