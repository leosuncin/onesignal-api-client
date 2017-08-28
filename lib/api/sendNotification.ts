import * as request from "got";

import { INotification } from "api/INotification";
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
  notification: INotification
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
