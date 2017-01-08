"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
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
    };
    // Used to toggle the menu on small screens when clicking on the menu button
    AppComponent.prototype.toggleMenu = function () {
        if (this.navDemo.nativeElement.className.indexOf("w3-show") == -1) {
            this.navDemo.nativeElement.className += " w3-show";
        }
        else {
            this.navDemo.nativeElement.className = this.navDemo.nativeElement.className.replace(" w3-show", "");
        }
    };
    __decorate([
        core_1.ViewChild('navDemo'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "navDemo", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map