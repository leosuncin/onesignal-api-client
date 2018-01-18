/**
 * Filter by tag
 *
 * @export
 */
export interface ITag {
  /**
   * Filter by tag value
   */
  field: "tag";
  /**
   * Condition to agree.
   */
  relation: ">" | "<" | "=" | "!=";
  /**
   * Tag key to compare.
   */
  key: string;
  /**
   *  Tag value to compare.
   */
  value: string;
}

/**
 * Filter by tag
 *
 * @export
 */
export interface ITagExists {
  /**
   * Filter by tag only if exists or not
   */
  field: "tag";
  /**
   * Condition to agree.
   */
  relation: "exists" | "not_exists";
  /**
   * Tag key to compare.
   */
  key: string;
}
