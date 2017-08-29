/**
 * Filter by tag
 *
 * @export
 * @interface ITag
 */
export interface ITag {
  /**
   * Filter by tag value
   *
   * @type {string = "tag"}
   * @memberof ITag
   */
  field: "tag";
  /**
   * Condition to agree.
   *
   * @type {string = ">", "<", "=", "!="}
   * @memberof ITag
   */
  relation: ">" | "<" | "=" | "!=";
  /**
   * Tag key to compare.
   *
   * @type {string}
   * @memberof ITag
   */
  key: string;
  /**
   *  Tag value to compare.
   *
   * @type {string}
   * @memberof ITag
   */
  value: string;
}

/**
 * Filter by tag
 *
 * @export
 * @interface ITagExists
 */
export interface ITagExists {
  /**
   * Filter by tag only if exists or not
   *
   * @type {string = "tag"}
   * @memberof ITagExists
   */
  field: "tag";
  /**
   * Condition to agree.
   *
   * @type {string = "exists", "not_exists"}
   * @memberof ITagExists
   */
  relation: "exists" | "not_exists";
  /**
   * Tag key to compare.
   *
   * @type {string}
   * @memberof ITagExists
   */
  key: string;
}
