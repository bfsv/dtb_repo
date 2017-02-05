import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  @ViewChild('navDemo') navDemo: ElementRef;

  // Used to toggle the menu on small screens when clicking on the menu button
  toggleMenu(): void {
    if (this.navDemo.nativeElement.className.indexOf("w3-show") == -1) {
      this.navDemo.nativeElement.className += " w3-show";
    } else {
      this.navDemo.nativeElement.className = this.navDemo.nativeElement.className.replace(" w3-show", "");
    }
  }

}