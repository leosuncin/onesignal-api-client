import * as request from "got";

import {
  INotificationDevicesStrict as INotificationDevices,
  INotificationFiltersStrict as INotificationFilters,
  INotificationSegmentsStrict as INotificationSegments
} from "interfaces/notification";
import { BASE_URL } from "values";

const URL: string = `${BASE_URL}/notifications`;

/**
 * Send notification to users
 *
 * @export
 * @param {string} secretKey REST API key
 * @param {INotification} notification The notification to send
 * @returns {Promise<object>}
 */
export async function sendNotification(
  secretKey: string,
  notification:
    | INotificationSegments
    | INotificationFilters
    | INotificationDevices
): Promise<object> {
  try {
    const response: { body: object } = await request.post(URL, {
      body: notification,
      json: true,
      headers: {
        Authorization: `Basic ${secretKey}`
      }
    });

    return response.body;
  } catch (error) {
    throw error;
  }
}
