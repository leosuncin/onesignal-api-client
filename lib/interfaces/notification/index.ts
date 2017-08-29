import { IActionButtons } from "interfaces/notification/IActionButtons";
import { IAppearance } from "interfaces/notification/IAppearance";
import { IAttachments } from "interfaces/notification/IAttachments";
import { ICommon } from "interfaces/notification/ICommon";
import { IContent } from "interfaces/notification/IContent";
import { IDelivery } from "interfaces/notification/IDelivery";
import { IDevices } from "interfaces/notification/IDevices";
import { IFilters } from "interfaces/notification/IFilters";
import { IGroup } from "interfaces/notification/IGroup";
import { IPlatform } from "interfaces/notification/IPlatform";
import { ISegments } from "interfaces/notification/ISegments";

/**
 * Notification for segments.
 *
 * @export
 * @interface INotificationSegments
 * @extends {ISegments}
 * @extends {IContent}
 * @extends {IAttachments}
 * @extends {IActionButtons}
 * @extends {IAppearance}
 * @extends {IDelivery}
 * @extends {IGroup}
 * @extends {IPlatform}
 */
export interface INotificationSegments
  extends ISegments,
    IContent,
    IAttachments,
    IActionButtons,
    IAppearance,
    IDelivery,
    IGroup,
    IPlatform {
  /**
   * An array of OneSignal app IDs. All users within these apps will receive at most one notification.
   * No targeting parameters may be used when using the `app_ids` parameter. All subscribed users will receive the notification.
   *
   * @type {string[]}
   * @memberof INotificationSegments
   */
  app_ids?: string[];
}

/**
 * Notification for filters
 *
 * @export
 * @interface INotificationFilters
 * @extends {IFilters}
 * @extends {IContent}
 * @extends {IAttachments}
 * @extends {IActionButtons}
 * @extends {IAppearance}
 * @extends {IDelivery}
 * @extends {IGroup}
 * @extends {IPlatform}
 */
export interface INotificationFilters
  extends IFilters,
    IContent,
    IAttachments,
    IActionButtons,
    IAppearance,
    IDelivery,
    IGroup,
    IPlatform {
  /**
   * An array of OneSignal app IDs. All users within these apps will receive at most one notification.
   * No targeting parameters may be used when using the `app_ids` parameter. All subscribed users will receive the notification.
   *
   * @type {string[]}
   * @memberof INotificationFilters
   */
  app_ids?: string[];
}

/**
 * Notification for devices.
 *
 * @export
 * @interface INotificationDevices
 * @extends {IDevices}
 * @extends {IContent}
 * @extends {IAttachments}
 * @extends {IActionButtons}
 * @extends {IAppearance}
 * @extends {IDelivery}
 * @extends {IGroup}
 * @extends {IPlatform}
 */
export interface INotificationDevices
  extends IDevices,
    IContent,
    IAttachments,
    IActionButtons,
    IAppearance,
    IDelivery,
    IGroup,
    IPlatform {
  /**
   * An array of OneSignal app IDs. All users within these apps will receive at most one notification.
   * No targeting parameters may be used when using the `app_ids` parameter. All subscribed users will receive the notification.
   *
   * @type {string[]}
   * @memberof INotificationDevices
   */
  app_ids?: string[];
}

/**
 * Notification for segments.
 *
 * @export
 * @interface INotificationSegmentsStrict
 * @extends {ICommon}
 * @extends {ISegments}
 * @extends {IContent}
 * @extends {IAttachments}
 * @extends {IActionButtons}
 * @extends {IAppearance}
 * @extends {IDelivery}
 * @extends {IGroup}
 * @extends {IPlatform}
 */
export interface INotificationSegmentsStrict
  extends ICommon,
    ISegments,
    IContent,
    IAttachments,
    IActionButtons,
    IAppearance,
    IDelivery,
    IGroup,
    IPlatform {}

/**
 * Notification for filters
 *
 * @export
 * @interface INotificationFiltersStrict
 * @extends {ICommon}
 * @extends {IFilters}
 * @extends {IContent}
 * @extends {IAttachments}
 * @extends {IActionButtons}
 * @extends {IAppearance}
 * @extends {IDelivery}
 * @extends {IGroup}
 * @extends {IPlatform}
 */
export interface INotificationFiltersStrict
  extends ICommon,
    IFilters,
    IContent,
    IAttachments,
    IActionButtons,
    IAppearance,
    IDelivery,
    IGroup,
    IPlatform {}

/**
 * Notification for devices.
 *
 * @export
 * @interface INotificationDevicesStrict
 * @extends {ICommon}
 * @extends {IDevices}
 * @extends {IContent}
 * @extends {IAttachments}
 * @extends {IActionButtons}
 * @extends {IAppearance}
 * @extends {IDelivery}
 * @extends {IGroup}
 * @extends {IPlatform}
 */
export interface INotificationDevicesStrict
  extends ICommon,
    IDevices,
    IContent,
    IAttachments,
    IActionButtons,
    IAppearance,
    IDelivery,
    IGroup,
    IPlatform {}
