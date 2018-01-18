import {
  IFilterAmount,
  IFilterAppVersion,
  IFilterBought,
  IFilterEmail,
  IFilterLang,
  IFilterLocation,
  IFilterOperator,
  IFilterSessionCount,
  IFilterSessionHours,
  IFilterSessionTime,
  IFilterTag,
  IFilterTagExists
} from "interfaces/notification/filter";

/**
 * Notificate users based on filters
 *
 * @export
 * @see https://documentation.onesignal.com/reference#section-send-to-users-based-on-filters
 */
export interface IFilters {
  /**
   * The filters parameter targets notification recipients.
   * Filters can be combined together to form advanced, highly precise user targeting.
   * This filter targeting parameter cannot be combined with any other targeting parameters.
   */
  filters: Array<
    | IFilterAmount
    | IFilterAppVersion
    | IFilterBought
    | IFilterEmail
    | IFilterLang
    | IFilterLocation
    | IFilterOperator
    | IFilterSessionCount
    | IFilterSessionHours
    | IFilterSessionTime
    | IFilterTag
    | IFilterTagExists
  >; // tslint:disable-line:prefer-array-literal array-type
}
