import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ListenerComponent } from './smart_listener/listener/listener.component';
import {Routes} from '@angular/router';
const appRoutes: Routes = [
  {path: '', component: ListenerComponent},



];
@NgModule({
  declarations: [
    AppComponent,
    ListenerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
