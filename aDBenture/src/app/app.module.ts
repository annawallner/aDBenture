import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRef } from './WindowRef';

import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
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
