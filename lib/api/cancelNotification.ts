import * as request from "got";

import { BASE_URL } from "values";

const URL: string = `${BASE_URL}/notifications`;

/**
 * Stop a scheduled or currently outgoing notification
 *
 * @export
 * @param {string} secretKey REST API key
 * @param {string} appId Application identifier
 * @param {string} notificationId Notification identifier
 * @returns {Promise<object>}
 */
export async function cancelNotification(
  secretKey: string,
  appId: string,
  notificationId: string
): Promise<object> {
  try {
    const response: {
      body: object;
    } = await request.delete(`${URL}/${notificationId}?app_id=${appId}`, {
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
