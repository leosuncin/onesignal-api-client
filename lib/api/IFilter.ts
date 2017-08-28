/**
 * Relational operators
 *
 * @export
 * @enum {string}
 */
export enum relations {
  ">" = ">",
  "<" = "<",
  "=" = "=",
  "!=" = "!=",
  exists = "exists",
  not_exists = "not_exists"
}

/**
 * The following are filter field options
 *
 * @export
 * @enum {string}
 */
export enum fields {
  /**
   * Number of hours before or after the users last session.
   */
  last_session = "last_session",
  /**
   * Number of hours before or after the users first session.
   */
  first_session = "first_session",
  /**
   * Number sessions.
   */
  session_count = "session_count",
  /**
   * Time in seconds the user has been in your app.
   */
  session_time = "session_time",
  /**
   * Amount in USD a user has spent on IAP (In App Purchases).
   */
  amount_spent = "amount_spent",
  /**
   * SKU purchased in your app as an IAP (In App Purchases)
   */
  bought_sku = "bought_sku",
  /**
   * Tag key to compare.
   */
  tag = "tag",
  /**
   * Two character language code.
   * @see https://documentation.onesignal.com/docs/language-localization
   */
  language = "language",
  /**
   * App version.
   */
  app_version = "app_version",
  /**
   * Location.
   */
  location = "location",
  /**
   * Email address.
   */
  email = "email"
}

/**
 * Logical operator
 *
 * @export
 * @enum {string}
 */
export enum operators {
  AND = "AND",
  OR = "OR"
}

/**
 * Filter for targeting users.
 *
 * @export
 * @interface IFilter
 */
export interface IFilter {
  /**
   * Filter field key
   *
   * @type {string}
   * @memberof IFilter
   */
  field?: string;
  /**
   * Condition to agree
   *
   * @type {string}
   * @memberof IFilter
   */
  relation?: string;
  /**
   * Number of hours
   *
   * @type {string}
   * @memberof IFilter
   */
  hours_ago?: string;
  /**
   * Number or string value
   *
   * @type {string}
   * @memberof IFilter
   */
  value?: string;
  /**
   * Key value
   *
   * @type {string}
   * @memberof IFilter
   */
  key?: string;
  /**
   * Radius in meters
   *
   * @type {string}
   * @memberof IFilter
   */
  radius?: string;
  /**
   * Latitude
   *
   * @type {string}
   * @memberof IFilter
   */
  lat?: string;
  /**
   * Longitude
   *
   * @type {string}
   * @memberof IFilter
   */
  long?: string;
  /**
   * Logical filter combination
   *
   * @type {string}
   * @memberof IFilter
   */
  operator?: string;
}
