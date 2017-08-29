/**
 * Filter by SKU purchased
 *
 * @export
 * @interface IBought
 */
export interface IBought {
  /**
   * Filter by SKU purchased
   *
   * @type {string = "bought_sku"}
   * @memberof IBought
   */
  field: "bought_sku";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<", "="}
   * @memberof IBought
   */
  relation: ">" | "<" | "=";
  /**
   * SKU purchased in your app as an IAP (In App Purchases).
   *
   * @type {string}
   * @memberof IBought
   * @example "com.domain.100coinpack"
   */
  key: string;
  /**
   * Value of SKU for compare to.
   *
   * @type {string}
   * @memberof IBought
   * @example "0.99"
   */
  value: string;
}
