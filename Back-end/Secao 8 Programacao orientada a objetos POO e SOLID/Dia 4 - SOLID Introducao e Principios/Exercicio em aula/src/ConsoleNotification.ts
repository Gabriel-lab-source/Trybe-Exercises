/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Notificator from './Notificator';

export default class ConsoleNotification implements Notificator {
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}