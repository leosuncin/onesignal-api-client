/**
 * Combine multiple filters
 *
 * @export
 */
export interface IOperator {
  /**
   * Filter combination
   */
  operator: "AND" | "OR";
}
