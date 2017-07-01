import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  @ViewChild('navDemo') navDemo: ElementRef;


  constructor(router: Router) {

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      }
    });

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