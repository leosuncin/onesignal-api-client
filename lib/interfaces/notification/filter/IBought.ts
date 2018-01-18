/**
 * Filter by SKU purchased
 *
 * @export
 */
export interface IBought {
  /**
   * Filter by SKU purchased
   */
  field: "bought_sku";
  /**
   * Condition to agree.
   */
  relation: ">" | "<" | "=";
  /**
   * SKU purchased in your app as an IAP (In App Purchases).
   *
   * @example "com.domain.100coinpack"
   */
  key: string;
  /**
   * Value of SKU for compare to.
   *
   * @example "0.99"
   */
  value: string;
}
