/**
 * Combine multiple filters
 *
 * @export
 * @interface IOperator
 */
export interface IOperator {
  /**
   * Filter combination
   *
   * @type {string = "AND", "OR"}
   * @memberof IOperator
   */
  operator: "AND" | "OR";
}
