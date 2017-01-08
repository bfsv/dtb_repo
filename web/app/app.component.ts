import { Component, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Tour of Heroes';

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
}