import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  styleUrls: ['./google-maps.component.css'],
  templateUrl : './google-maps.component.html'
})
export class GoogleMapsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 36.778418;
  lng = 10.09007;
  constructor() { }

  ngOnInit() {
  }

}
