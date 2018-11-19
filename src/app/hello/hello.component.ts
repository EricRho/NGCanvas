import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public greeting = 'Hello World';

  // @Input()
  // src: string;

  // @Input()
  // type: string;

  // @ViewChild('script') script: ElementRef;

  // constructor() { }

  // ngOnInit() {
  //   console.log('hello test');
  // }

  // convertToScript() {
  //   var element = this.script.nativeElement;
  //   var script = document.createElement("script");
  //   script.type = this.type ? this.type : "text/javascript";
  //   if (this.src) {
  //       script.src = this.src;
  //   }
  //   if (element.innerHTML) {
  //       script.innerHTML = element.innerHTML;
  //   }
  //   var parent = element.parentElement;
  //   parent.parentElement.replaceChild(script, parent);
  // }

  // ngAfterViewInit() {
  //   this.convertToScript();
  // }

}
