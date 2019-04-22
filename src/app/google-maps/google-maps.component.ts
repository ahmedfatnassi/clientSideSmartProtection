import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',

  styleUrls: ['./google-maps.component.css'],
  styles : [`
    agm-map {
      height: 300px;
    }
  `] ,
  template :
  '<agm-map [latitude]="lat" [longitude]="lng"></agm-map>'
})
export class GoogleMapsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
