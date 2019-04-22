import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ListenerComponent } from './smart_listener/listener/listener.component';
import {RouterModule, Routes} from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import {AgmCoreModule} from '@agm/core';
const appRoutes: Routes = [
  {path: '', component: ListenerComponent},
  {path: '/map', component: GoogleMapsComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    ListenerComponent,
    WeatherComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCs2jZCyvg8W3vbL-8VmcJSki2yPjbA62k'
    }),
    RouterModule.forRoot([])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
