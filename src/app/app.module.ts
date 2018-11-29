import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CallbackComponent } from './callback/callback.component';
import { AppRoutingModule } from './/app-routing.module';
import { CallbackModule } from './callback/callback.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CallbackModule,
    RouterModule.forRoot([
      {
        path: 'callback',
        component: CallbackComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
