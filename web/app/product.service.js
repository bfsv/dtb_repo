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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var app_constants_1 = require('./app.constants');
var ProductService = (function () {
    function ProductService(http, configuration) {
        this.http = http;
        this.productsUrl = configuration.Server + 'produits/pub';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    ProductService.prototype.getProducts = function () {
        console.log(">>>>>> getProdcuts :" + this.productsUrl);
        return this.http.get(this.productsUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.search = function (term) {
        var url = this.productsUrl + "/search/" + term;
        return this.http
            .post(url, JSON.stringify(term), { headers: this.headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductService.prototype.getProductsCategories = function () {
        console.log(">>>>>> Get Products Categories :" + this.productsUrl);
        var url = this.productsUrl + "/categories";
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred in ProductService : ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map