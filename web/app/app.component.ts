import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Tour of Heroes';

  @ViewChild('navDemo') navDemo: ElementRef;

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

  // Used to toggle the menu on small screens when clicking on the menu button
  toggleMenu(): void {
    if (this.navDemo.nativeElement.className.indexOf("w3-show") == -1) {
      this.navDemo.nativeElement.className += " w3-show";
    } else {
      this.navDemo.nativeElement.className = this.navDemo.nativeElement.className.replace(" w3-show", "");
    }
  }

}