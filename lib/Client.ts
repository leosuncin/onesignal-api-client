import { INotification } from "api/INotification";
import { sendNotification } from "api/sendNotification";

/**
 * Closure for One Signal API
 *
 * @export
 * @interface IOneSignalApi
 */
export interface IOneSignalApi {
  (appId: string, secretKey: string);
}

/**
 * OneSignal REST API methods
 *
 * @export
 * @interface IRestApi
 */
export interface IRestApi {
  /**
   * Send notification to users
   *
   * @param {INotification} notification
   * @returns {Promise<object>}
   * @memberof IRestApi
   */
  sendNotification(notification: INotification): Promise<object>;
}

/**
 * OneSignal Rest API wrapper
 *
 * @export
 * @param {string} appId Application identifier
 * @param {string} secretKey REST API key
 * @returns {IRestApi}
 */
export function oneSignalApi(appId: string, secretKey: string): IRestApi {
  if (!appId) {
    throw new TypeError("An application identifier is required");
  }
  if (!secretKey) {
    throw new TypeError("A secret API key is required");
  }

  return {
    async sendNotification(notification: INotification): Promise<object> {
      return sendNotification(
        secretKey,
        Object.assign(notification, { app_id: appId })
      );
    }
  };
}
