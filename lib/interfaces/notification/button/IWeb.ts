import { IAction } from "interfaces/notification/button/IAction";

/**
 * Web buttons allow more than one action to be taken on a notification.
 *
 * @export
 * @interface IWeb
 * @extends {IActionButton}
 */
export interface IWeb extends IAction {
  url?: string;
}
