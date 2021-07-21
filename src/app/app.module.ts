import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRef } from './WindowRef';

import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';

import { EditorComponent } from './editor/editor.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
