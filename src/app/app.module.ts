import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListenerComponent } from './smart_listener/listener/listener.component';
import {RouterModule, Routes} from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import {AgmCoreModule} from '@agm/core';
import {Service} from './smart_listener/service';
import { CreatecitizenComponent } from './createcitizen/createcitizen.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreatecittizenService} from './createcitizen/createcittizenService';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Citizenmodel} from './createcitizen/citizenmodel';

const appRoutes: Routes = [
  {path: '', component: ListenerComponent},
  {path: 'createcitizen', component: CreatecitizenComponent},
  {path: 'maps', component: GoogleMapsComponent},
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    ListenerComponent,
    WeatherComponent,
    GoogleMapsComponent,
    CreatecitizenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCs2jZCyvg8W3vbL-8VmcJSki2yPjbA62k'
    }),
    RouterModule.forRoot(appRoutes)
    , HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [Service, CreatecittizenService, Citizenmodel],
  bootstrap: [AppComponent]
})
export class AppModule { }
