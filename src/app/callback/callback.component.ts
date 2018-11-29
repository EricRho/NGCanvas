import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.close();
  }

  close() {
    // const event = new CustomEvent('oauthCallback', {'detail': window.location.href});
    console.log('event', event);

    // window.document.dispatchEvent(event);
    window.close();
  }

}
