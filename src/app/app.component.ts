import { Component } from '@angular/core';
import * as Sfdc from '@salesforce/canvas-js-sdk';
import * as force from 'forcejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public sfdc = Sfdc || '';

  ngOnInit() {
    this.checkSfdc();

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
    if (window['Sfdc']) {
      this.sfdc = window['Sfdc'];
    }
  }

  // authorise() {
  //   this.sfdc.canvas.onReady(function() {
  //     console.log('function to oauth');

  //     const loggedIn = this.sfdc.canvas.oauth.loggedIn();
  //   });

  //   this.sfdc.canvas(function() {
  //     var login    = Sfdc.canvas.byId("login"),
  //       loggedIn = Sfdc.canvas.oauth.loggedin(),
  //       token = Sfdc.canvas.oauth.token()
  //       login.innerHTML = (loggedIn) ? "Logout" : "Login";

  //       if (loggedIn) {
  //         Sfdc.canvas.byId("oauth").innerHTML = Sfdc.canvas.oauth.token().substring(1,40) + "…";
  //       }
  //       login.onclick = this.loginHandler;
  //   });
  // }

}
