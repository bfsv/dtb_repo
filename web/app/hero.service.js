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
var HeroService = (function () {
    function HeroService(http, configuration) {
        this.http = http;
        this.heroesUrl = configuration.ServerWithApiUrl + '/heroes';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    HeroService.prototype.getHeroes = function () {
        console.log(">>>>>> getHeroes :" + this.heroesUrl);
        return this.http.get(this.heroesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero._id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred in HeroService : ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map