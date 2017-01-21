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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var ProductsComponent = (function () {
    function ProductsComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.categories = [
            "Sec", "Liquide", "Cosmétique", "Entretien", "Farines", "Pâtes", "Céréales"
        ];
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService
            .getProducts()
            .subscribe(function (data) { return _this.products = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Products complete'); });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dtb-products',
            templateUrl: 'products.component.html',
            styleUrls: ['products.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map