import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

  // Confirm alert message
  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      }
      else {}
    });
  }

  // Success alert message
  success(message: string) {
    alertify.success(message);
  }

  // Error alert message
  error(message: string) {
    alertify.error(message);
  }

  // Warning alert message
  warning(message: string) {
    alertify.warning(message);
  }

  // General alert message
  message(message: string) {
    alertify.message(message);
  }
}
