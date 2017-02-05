import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from './image';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'dtb-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  images: Image[] = [
    { "title": "Dans ton bocal", "url": "/images/Logo_Long.png" },
    { "title": "3 bocaux", "url": "/images/bocaux1.png" },
    { "title": "2 bocaux, 1 bouteille", "url": "/images/bocaux2.jpg" },
    { "title": "Maison", "url": "/images/maison.jpg" }
  ];

  constructor() { }


  ngAfterViewInit() {
    var myCenter = new google.maps.LatLng(50.5667, 2.85);
    var mapProp = {
      center: myCenter,
      zoom: 14,
      scrollwheel: false,
      draggable: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
      position: myCenter,
    });
    marker.setMap(map);
  }

  ngOnInit(): void {
  }

}
