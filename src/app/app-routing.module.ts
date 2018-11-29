import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello/hello.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false })
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
