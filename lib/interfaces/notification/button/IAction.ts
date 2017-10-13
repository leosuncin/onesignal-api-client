/**
 * Action buttons allow more than one action to be taken on a notification.
 *
 * @export
 * @interface IAction
 */
export interface IAction {
  id: string;
  text: string | undefined;
  icon?: string;
}
