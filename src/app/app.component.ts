import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Azkar';
  constructor() {
    this.requestPermission();
    this.startScheduledNotifications();
  }
  requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notifications enabled!');
        } else {
          console.log('Notifications blocked!');
        }
      });
    }
  }

  showNotification(title: string, body: string) {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: 'icons/icon-192x192.png',
      });
    }
  }

  startScheduledNotifications() {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if ((hours === 6 || hours === 18) && minutes === 0) {
        this.showNotification('Reminder', 'Time for your scheduled task!');
      }
    }, 60000); // Check every minute
  }
}
