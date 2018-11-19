import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public greeting = 'Hello World';

  constructor() { }

  ngOnInit() {
    console.log('hello test');
  }
}
