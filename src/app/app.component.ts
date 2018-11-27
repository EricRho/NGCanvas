import { Component } from '@angular/core';
import * as Sfdc from '@salesforce/canvas-js-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public sfdc = Sfdc || '';

  ngOnInit() {
    // console.log('%c global ----> ', 'background:lime;color:black;', Sfdc);
    this.checkSfdc();
    this.loginHandler();
    // this.canvasFunc();

    // this.sfdc.canvas(function() {
    //   // On Ready...
    //   const login = this.sfdc.canvas.byId("login"),
    //     loggedIn = this.sfdc.canvas.oauth.loggedin(),
    //     token = this.sfdc.canvas.oauth.token()
    //   login.innerHTML = (loggedIn) ? "Logout" : "Login";
    //   if (loggedIn) {
    //        // Only displaying part of the OAuth token for better formatting.
    //       this.sfdc.canvas.byId("oauth").innerHTML = this.sfdc.canvas.oauth.token()
    //           .substring(1,40) + "…";
    //   }
    //   login.onclick = this.loginHandler;
    // });
  }

  checkSfdc() {
    // try {
    //   window.opener.Sfdc.canvas.oauth.childWindowUnloadNotification(self.location.hash);
    // } catch(ignore) {
    //   console.log('ignore! ----->', window.Sfdc);
    //   this.sfdc = window.Sfdc;
    // }
    // console.log('SFDC', this.sfdc);

    if (window['Sfdc']) {
      this.sfdc = window['Sfdc'];
      console.log('%c--- sfdc found ---', 'background:plum;color:black;', this.sfdc);
    }
  }

  loginHandler() {
    let uri, login;
    if (!this.sfdc.canvas.oauth.loggedin()) {
      console.log('%c--- not logged in. Logging in now... ---', 'background:skyblue;color:black;');
      uri = this.sfdc.canvas.oauth.loginUrl();
      this.sfdc.canvas.oauth.login({
        uri : uri,
          params: {
            response_type : 'token',
            client_id : '3MVG9U_dUptXGpYJeeYccVjOOOT_4RY3xy52COjqApTWSVDm7aNH0VW5zk4ELU3r_alMwGQ2fq_wUBs_l2dng',
            redirect_uri : encodeURIComponent(
                'https://ericrho.github.io/NGCanvas/callback.html')
            }
      });
    } else {
        this.sfdc.canvas.oauth.logout();
        login.innerHTML = 'Login';
        this.sfdc.canvas.byId('oauth').innerHTML = '';
    }
    return false;
  }
}
