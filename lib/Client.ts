import { cancelNotification, sendNotification } from "api";
import {
  INotificationDevices,
  INotificationFilters,
  INotificationSegments
} from "interfaces/notification";

/**
 * Closure for One Signal API
 *
 * @export
 */
export interface IOneSignalApi {
  (appId: string, secretKey: string);
}

/**
 * OneSignal REST API methods
 *
 * @export
 */
export interface IRestApi {
  /**
   * Send notification to users
   *
   * @param notification The notification to send
   * @returns Success or error response
   */
  sendNotification(
    notification:
      | INotificationDevices
      | INotificationFilters
      | INotificationSegments
  ): Promise<object>;
  /**
   * Stop a scheduled or currently outgoing notification
   *
   * @param notificationId Notification identifier
   * @returns Success or error response
   */
  cancelNotification(notificationId: string): Promise<object>;
}

/**
 * OneSignal Rest API wrapper
 *
 * @export
 * @param appId Application identifier
 * @param secretKey REST API key
 * @returns OneSignal API client
 */
export function oneSignalApi(appId: string, secretKey: string): IRestApi {
  if (!appId) {
    throw new TypeError("An application identifier is required");
  }
  if (!secretKey) {
    throw new TypeError("A secret API key is required");
  }

  return {
    async sendNotification(
      notification:
        | INotificationDevices
        | INotificationFilters
        | INotificationSegments
    ): Promise<object> {
      return sendNotification(secretKey, { ...notification, app_id: appId });
    },
    cancelNotification: cancelNotification.bind(null, secretKey, appId)
  };
}
