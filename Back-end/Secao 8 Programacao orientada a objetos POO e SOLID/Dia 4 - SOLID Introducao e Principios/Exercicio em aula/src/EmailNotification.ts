/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Notificator from './Notificator';

export default class EmailNotification implements Notificator {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  sendNotification(message: string): void {
    console.log(
      `Here should go the implementation \
      to send notification to the email: ${this.email} - ${message}`,
    );
  }
}