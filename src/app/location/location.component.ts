import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, AfterViewInit {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.mapElement);
      const mapProperties = {
      center: new google.maps.LatLng(40.7411207, -74.0317554),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

}
