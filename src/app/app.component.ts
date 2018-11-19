import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    console.log('oauth test');
    try {
      console.log('test callback', window.opener.Sfdc);
      window.opener.Sfdc.canvas.oauth.childWindowUnloadNotification(self.location.hash);
      // const Sfdc = window.opener.Sfdc;

    } catch (ignore) {}
  }

  // loginHandler(e) {
  //   let uri;
  //   if (!Sfdc.canvas.oauth.loggedin()) {
  //     uri = Sfdc.canvas.oauth.loginUrl();
  //     Sfdc.canvas.oauth.login(
  //       {uri : uri,
  //         params: {
  //           response_type : "token",
  //           client_id : "3MVG9U_dUptXGpYJeeYccVjOOOT_4RY3xy52COjqApTWSVDm7aNH0VW5zk4ELU3r_alMwGQ2fq_wUBs_l2dng",
  //           redirect_uri : encodeURIComponent(
  //               "https://ericrho.github.io/NGCanvas/callback.html")
  //           }});
  //   } else {
  //       Sfdc.canvas.oauth.logout();
  //       login.innerHTML = "Login";
  //       Sfdc.canvas.byId("oauth").innerHTML = "";
  //   }
  //   return false;
  //   }

    // Bootstrap the page once the DOM is ready.
    // Sfdc.canvas(function() {
    //     // On Ready...
    //     var login    = Sfdc.canvas.byId("login"),
    //         loggedIn = Sfdc.canvas.oauth.loggedin(),
    //         token = Sfdc.canvas.oauth.token()
    //     login.innerHTML = (loggedIn) ? "Logout" : "Login";
    //     if (loggedIn) {
    //         // Only displaying part of the OAuth token for better formatting.
    //         Sfdc.canvas.byId("oauth").innerHTML = Sfdc.canvas.oauth.token()
    //             .substring(1,40) + "…";
    //     }
    //     login.onclick=loginHandler;
    // });
}
