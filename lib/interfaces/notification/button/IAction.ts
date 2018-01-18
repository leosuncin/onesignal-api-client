/**
 * Action buttons allow more than one action to be taken on a notification.
 *
 * @export
 */
export interface IAction {
  id: string;
  text: string | undefined;
  icon?: string;
}
