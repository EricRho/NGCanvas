import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    console.log('oauth test', this.title);

    try {
      console.log('test callback');
      window.opener.Sfdc.canvas.oauth.childWindowUnloadNotification(self.location.hash);

    } catch (ignore) {}
    self.close();
  }
}
