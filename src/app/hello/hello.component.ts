import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { OAuth, DataService } from 'forcejs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public greeting = 'Hello World';

  @Input() sfdc;

  constructor() {}

  ngOnInit() {
    console.log('%c--- hello ---', 'background:lime;color:black;', this.sfdc);

    // let oauth = OAuth.createInstance();
    // oauth.login().then(oauthResult => DataService.createInstance(oauthResult));
  }

  login() {
    let oauth = OAuth.createInstance();
    console.log('OAuth', OAuth);

    oauth.loginURL = 'https://test.salesforce.com';

    oauth.login().then(oauthResult => DataService.createInstance(oauthResult));
    console.log('dataService', DataService);
    DataService.getInstance();
  }



  // login() {
  //   let uri, login;
  //   if (!this.sfdc.canvas.oauth.loggedin()) {
  //     console.log('%c--- not logged in. Logging in now... ---', 'background:skyblue;color:black;');
  //     uri = this.sfdc.canvas.oauth.loginUrl();
  //     this.sfdc.canvas.oauth.login({
  //       uri : uri,
  //         params: {
  //           response_type : 'token',
  //           client_id : '3MVG9U_dUptXGpYJeeYccVjOOOT_4RY3xy52COjqApTWSVDm7aNH0VW5zk4ELU3r_alMwGQ2fq_wUBs_l2dng',
  //           redirect_uri : encodeURIComponent(
  //               'https://ericrho.github.io/NGCanvas/callback.html')
  //           }
  //     });
  //     console.log('%c--- attempted login ---', 'background:white;color:black;');
  //   } else {
  //       this.sfdc.canvas.oauth.logout();
  //       login.innerHTML = 'Login';
  //       this.sfdc.canvas.byId('oauth').innerHTML = '';
  //   }
  //   return false;
  // }

}
