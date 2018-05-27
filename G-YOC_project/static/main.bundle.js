webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    bottom: 0;\r\n}\r\n.Gstyle{\r\n    color: rgba(243, 30, 30, 0.959);\r\n    -webkit-animation: GstyleAnimate 3s ease-in-out;\r\n            animation: GstyleAnimate 3s ease-in-out;\r\n}\r\n.YOCstyle{\r\n    color: rgba(241, 238, 42, 0.979);\r\n    -webkit-animation: YOCstyleAnimate 3s linear;\r\n            animation: YOCstyleAnimate 3s linear;\r\n}\r\n@-webkit-keyframes GstyleAnimate{\r\n    0%{color:rgba(243, 30, 30, 0.959);}\r\n    50%{color:rgba(241, 238, 42, 0.979);}\r\n    100%{color:rgba(243, 30, 30, 0.959);}\r\n}\r\n@keyframes GstyleAnimate{\r\n    0%{color:rgba(243, 30, 30, 0.959);}\r\n    50%{color:rgba(241, 238, 42, 0.979);}\r\n    100%{color:rgba(243, 30, 30, 0.959);}\r\n}\r\n@-webkit-keyframes YOCstyleAnimate{\r\n    0%{color:rgba(241, 238, 42, 0.979);}\r\n    50%{color:rgba(243, 30, 30, 0.959);}\r\n    100%{color:rgba(241, 238, 42, 0.979);}\r\n    \r\n}\r\n@keyframes YOCstyleAnimate{\r\n    0%{color:rgba(241, 238, 42, 0.979);}\r\n    50%{color:rgba(243, 30, 30, 0.959);}\r\n    100%{color:rgba(241, 238, 42, 0.979);}\r\n    \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark\">\r\n  <div class=\"hero-head\">\r\n    <nav class=\"navbar\">\r\n      <div class=\"container\">\r\n        <div id=\"navbarMenuHeroB\" class=\"navbar-menu\">\r\n          <div class=\"navbar-end\">\r\n            <a class=\"navbar-item\" routerLink=\"/home\">\r\n              Home\r\n            </a>\r\n            <a class=\"navbar-item\" routerLink=\"/search\">\r\n              Search!\r\n            </a>\r\n            <a class=\"navbar-item\" routerLink=\"/home\">  \r\n              Match\r\n            </a>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/home\">\r\n        \r\n        <h1 class=\"title\">\r\n          \r\n          <span class=\"Gstyle\">G</span>-<span class=\"YOCstyle\">YOC</span>\r\n        </h1>\r\n        \r\n        <h2 class=\"subtitle\">\r\n          Get Your Own Clothing\r\n        </h2>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_result_search_result_component__ = __webpack_require__("./src/app/search-result/search-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_7__search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_result_search_result_component__["a" /* SearchResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".animate_left{\r\n    position: relative;\r\n    -webkit-animation: moveLeft .5s ease-out 1;\r\n    animation: moveLeft .5s ease-out 1 ;\r\n}\r\n\r\n.animate_left_1{\r\n    position: relative;\r\n    -webkit-animation: moveLeft_1 1.5s ease-out 1 ;\r\n    animation: moveLeft_1 1.5s ease-out 1  ;\r\n}\r\n\r\n.package-price{\r\n    border-left: 0 ;\r\n    border-right: 0;\r\n    border-style: double;\r\n}\r\n\r\n.go-centered{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@-webkit-keyframes moveLeft{\r\n    0% {opacity: 0; padding-left: 50px;}\r\n    100% {opacity: 1; padding-left: 0px;}\r\n}\r\n\r\n@keyframes moveLeft{\r\n    0% {opacity: 0; padding-left: 50px;}\r\n    100% {opacity: 1; padding-left: 0px;}\r\n}\r\n\r\n@-webkit-keyframes moveLeft_1{\r\n    0% {opacity: 0; padding-left: 50px;}\r\n    100% {opacity: 1; padding-left: 0px;}\r\n}\r\n\r\n@keyframes moveLeft_1{\r\n    0% {opacity: 0; padding-left: 50px;}\r\n    67% {opacity: 0; padding-left: 50px;}\r\n    100% {opacity: 1; padding-left: 0px;}\r\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n  <div class=\"container\">\r\n    <!--div class=\"columns\">\r\n      <div class=\"column\">\r\n\r\n      </div>\r\n    </div-->\r\n    <div routerLink=\"/home\" class=\"is-spaced\" style=\"margin-bottom: 20px;\">\r\n      <div class=\"image is-64x64 go-centered\"><img src=\"../assets/G-YOC.png\" alt=\"Logo\"></div>\r\n    </div>\r\n    <div class=\"buttons is-centered animate_left_1\">\r\n        <a routerLink=\"/search\" title=\"Search\" >\r\n          <span class=\"button is-large is-dark is-outlined\">Search!</span>    \r\n        </a>\r\n        <span class=\"button\" style=\"visibility: hidden;\"></span>\r\n        <a title=\"Match Your clothes\">\r\n          <span class=\"button is-large is-lite is-outlined\" (click)=\"getRandomMatch()\" >Match</span>       \r\n        </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section\" >\r\n  <div class=\"container\">\r\n    <div class=\"columns\">\r\n      <div class=\"column\">\r\n        <figure  class=\"image is-256x256\">\r\n          <a target=\"_blank\" href=\"{{ resClothes.url }}\">\r\n            <img src=\"{{ resClothes.img_url }}\">\r\n          </a>\r\n        </figure>\r\n      </div>\r\n      <div class=\"column\">\r\n        <figure class=\"image is-256x256\">\r\n          <a target=\"_blank\" href=\"{{ resPants.url }}\">\r\n            <img src=\"{{ resPants.img_url }}\">\r\n          </a>\r\n        </figure>\r\n      </div>\r\n      <div class=\"column\">\r\n        <figure class=\"image is-256x256\" >\r\n            <a target=\"_blank\" href=\"{{ resShoes.url }}\">\r\n              <img src=\"{{ resShoes.img_url }}\">\r\n            </a>\r\n        </figure>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"columns\">\r\n      <div class=\"column is-4 is-offset-4\">\r\n        <p class=\"has-text-centered package-price is-size-4\"> \r\n         Package Price <span class=\"has-text-danger\">{{ package_price | currency : 'TWD' }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<footer class=\"footer is-dark\">\r\n  <div class=\"container\">\r\n    <div class=\"content has-text-centered\">\r\n      <p>\r\n        This is a website for getting your own clothing.\r\n      </p>      \r\n      <p>\r\n        <a target=\"_blank\" href=\"https://github.com/bobosheep/G-YOC\"><span class=\"icon is-medium has-text-black\"><i class=\"fab fa-github fa-2x\"></i></span></a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/G-YOC-139433063583923/\"><span class=\"icon is-medium\"><i class=\"fab fa-facebook fa-2x\" ></i></span></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(http) {
        var _this = this;
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.queryClothes = {
            query: {
                query_string: {
                    query: "category:衣服 AND gender:(男 OR 女)"
                }
            },
            from: Math.floor(Math.random() * 10),
            size: 1
        };
        this.queryPants = {
            query: {
                query_string: {
                    query: "category:褲裙 AND gender:(男 OR 女)"
                }
            },
            from: Math.floor(Math.random() * 10),
            size: 1
        };
        this.queryShoes = {
            query: {
                query_string: {
                    query: "category:鞋 AND gender:(男 OR 女)"
                }
            },
            from: Math.floor(Math.random() * 10),
            size: 1
        };
        this.package_price = 0;
        this.getRandomMatch = function () {
            _this.queryClothes.from = Math.floor(Math.random() * 2000);
            _this.queryPants.from = Math.floor(Math.random() * 2000);
            _this.queryShoes.from = Math.floor(Math.random() * 200);
            _this.package_price = 0;
            console.log('click');
            _this.http.post("http://localhost:5000/search", _this.queryClothes, _this.httpOptions)
                .subscribe(function (datas) {
                var data = datas.hits.hits;
                //console.log(data);
                if (data.length > 0) {
                    _this.resClothes = data[0]._source;
                    _this.resClothes.price = parseInt(_this.resClothes.price);
                    _this.package_price += _this.resClothes.price;
                    //console.log(this.resClothes);
                }
            });
            _this.http.post("http://localhost:5000/search", _this.queryPants, _this.httpOptions)
                .subscribe(function (datas) {
                var data = datas.hits.hits;
                //console.log(data);
                if (data.length > 0) {
                    _this.resPants = data[0]._source;
                    _this.resPants.price = parseInt(_this.resPants.price);
                    _this.package_price += _this.resPants.price;
                    //console.log(this.resClothes);
                }
            });
            _this.http.post("http://localhost:5000/search", _this.queryShoes, _this.httpOptions)
                .subscribe(function (datas) {
                var data = datas.hits.hits;
                //console.log(data);
                if (data.length > 0) {
                    _this.resShoes = data[0]._source;
                    _this.resShoes.price = parseInt(_this.resShoes.price);
                    _this.package_price += _this.resShoes.price;
                    //console.log(this.resClothes);
                }
            });
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getRandomMatch();
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/search-result/search-result.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n@media (min-width : 769px){\r\n    .animate_left{\r\n        position: relative;\r\n        -webkit-animation: moveLeft .5s ease-out 1;\r\n        animation: moveLeft .5s ease-out 1 ;\r\n    }\r\n    .w-fix{\r\n        width: 70%;\r\n        margin-left: 15%;\r\n    }\r\n}\r\n\r\n\r\n.on_sale{\r\n    color: rgb(238, 235, 80);\r\n    background-color: rgb(226, 37, 37);\r\n}\r\n\r\n\r\n@-webkit-keyframes moveLeft{\r\n    0% {opacity: 0; padding-left: 62px;}\r\n    100% {opacity: 1; padding-left: 12px;}\r\n}\r\n\r\n\r\n@keyframes moveLeft{\r\n    0% {opacity: 0; padding-left: 62px;}\r\n    100% {opacity: 1; padding-left: 12px;}\r\n}\r\n\r\n\r\n.clothes_name{\r\n    color: rgb(46, 49, 82);\r\n}\r\n\r\n\r\n.clothes_name:hover{\r\n    color: rgb(87, 97, 212);\r\n}"

/***/ }),

/***/ "./src/app/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n    <div class=\"container\"> \r\n        <div class=\"columns\">\r\n            <div class=\"column is-1-tablet is-offset-2-tablet is-hidden-mobile\">\r\n                <div >\r\n                    <div class=\"image is-64x64 \"><img src=\"../../assets/G-YOC.png\" alt=\"Logo\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"column is-6-tablet is-12-mobile \">\r\n                <div class=\"control\">\r\n                    <input [(ngModel)]=\"query\" (keyup.enter)=\"getSearch()\" class=\"input is-rounded \" type=\"text\" placeholder=\"What clothing you want\">\r\n                </div>\r\n            </div>\r\n            <div class=\"column is-1-mobile is-1-tablet is-offset-4-mobile animate_left\">\r\n                <button class=\"button is-dark is-outlined \" (click)=\"getSearch()\">Search!</button>    \r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!--顯示結果-->\r\n\r\n<section class=\"section\" *ngIf=\"have_result\">\r\n    <div class=\"container\">\r\n        <div class=\"columns\">\r\n            <div class=\"column is-3 is-offset-3 has-text-centered\">    \r\n                <span> Search Time : {{ result.took_time }} ms</span>\r\n            </div>\r\n            <div class=\"column is-3 has-text-centered\">    \r\n                <span> Search Result : {{ result.hits_total }} </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"columns is-multiline\">\r\n            <div class=\"column is-3-desktop is-3-tablet is-3-fullhd\" *ngFor=\"let clo of clothes; let i = index\">\r\n                <a target=\"_blank\" class=\"image is-256x256\" (click)=\"launchModal( clo.obj_id)\" >\r\n                    <img src=\"{{ clo.img_url }}\" alt=\"{{ clo.name }}\">\r\n                </a>\r\n                <div class=\"modal\" [ngClass]=\"\" id=\"{{ clo.obj_id }}\">\r\n                    <div class=\"modal-background\"></div>\r\n                    <div class=\"modal-card\">\r\n                        <header class=\"modal-card-head\">\r\n                            <p class=\"modal-card-title\">{{ clo.name }} <span class=\"on_sale is-size-5-desktop\" *ngIf=\"clo.store_price > clo.price \">On Sale!</span></p>\r\n                            <button class=\"delete\" aria-label=\"close\" (click)=\"closeModal( clo.obj_id)\"></button>\r\n                        </header>\r\n                        <section class=\"modal-card-body\">\r\n                            <p class=\"has-text-centered is-size-4\">Details</p>\r\n                            <p><b>顏色</b> : {{ clo.color }} </p> \r\n                            <p><b>其他顏色</b> : <span *ngFor=\"let color of clo.colors; let i = index\">{{ color }} <span *ngIf=\"i != clo.colors.length - 1\">,</span> </span></p>\r\n                            <p><b>Size</b> : <span *ngFor=\"let size of clo.sizes; let i = index\">{{ size }} <span *ngIf=\"i != clo.sizes.length - 1\">,</span> </span></p>\r\n                            <p><b>{{ clo.price | currency: 'TWD' }}</b> </p>\r\n                            <s *ngIf=\"clo.store_price > clo.price\">原價 : {{ clo.store_price | currency: 'TWD' }}</s>\r\n                            <p>最近更新 : {{ clo.last_updated | date }}</p>\r\n                            <p class=\"image is-square\">\r\n                                <img src=\"{{ clo.img_url }}\" alt=\"{{ clo.name }}\">\r\n                            </p>\r\n                            \r\n                        </section>\r\n                        <footer class=\"modal-card-foot\">\r\n                        </footer>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal\" [ngClass]=\"\" id=\"{{ clo.obj_id }}\">\r\n                    <div class=\"modal-background\"></div>\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"card-content\">\r\n                            <a class=\"image is-square\">\r\n                                <img src=\"{{ clo.img_url }}\" alt=\"{{ clo.name }}\">\r\n                            </a>\r\n                            \r\n                        </div>\r\n                    </div>  \r\n                    <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"closeModal( clo.obj_id)\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--article class=\"media w-fix \" *ngFor=\"let clo of clothes; let i = index\">\r\n            <figure class=\"media-left\">\r\n                <a target=\"_blank\" class=\"image is-256x256\" (click)=\"launchModal( clo.obj_id)\">\r\n                        <img src=\"{{ clo.img_url }}\" alt=\"{{ clo.name }}\">\r\n                </a>\r\n            </figure>\r\n            <div class=\"modal\" [ngClass]=\"\" id=\"{{ clo.obj_id }}\">\r\n                <div class=\"modal-background\"></div>\r\n                    <div class=\"modal-content\">\r\n                        <p class=\"image is-square\">\r\n                        <img src=\"{{ clo.img_url }}\" alt=\"{{ clo.name }}\">\r\n                        </p>\r\n                    </div>  \r\n                <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"closeModal( clo.obj_id)\"></button>\r\n            </div>\r\n            <div class=\"media-content\">\r\n                <div class=\"content\">\r\n                    <a target=\"_blank\" href=\"{{ clo.url }}\"><h2 class=\"title clothes_name\">{{ clo.name }} - {{ clo.gender }}</h2></a>\r\n                    <p><b>顏色</b> : {{ clo.color }} </p> \r\n                    <p><b>其他顏色</b> : <span *ngFor=\"let color of clo.colors; let i = index\">{{ color }} <span *ngIf=\"i != clo.colors.length - 1\">,</span> </span></p>\r\n                    <p><b>Size</b> : <span *ngFor=\"let size of clo.sizes; let i = index\">{{ size }} <span *ngIf=\"i != clo.sizes.length - 1\">,</span> </span></p>\r\n                    <span class=\"on_sale\" *ngIf=\"clo.store_price > clo.price\">On Sale!</span>\r\n                    <p><b>{{ clo.price | currency: 'TWD' }}</b> </p>\r\n                    <s *ngIf=\"clo.store_price > clo.price\">原價 : {{ clo.store_price | currency: 'TWD' }}</s>\r\n                    <p>最近更新 : {{ clo.last_updated | date }}</p>\r\n                </div>\r\n                \r\n            </div>\r\n            <!--div class=\"media-right\">\r\n                <a class=\"level-item\">\r\n                    <span class=\"icon has-text-danger\"><i class=\"fas fa-heart\"></i></span>\r\n                </a>\r\n            </div>\r\n            \r\n        </article-->\r\n    </div>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(http) {
        var _this = this;
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.query = '';
        this.have_result = false;
        this.queryBody = {
            query: {
                match: {
                    name: this.query
                }
            },
            from: 0,
            size: 20
        };
        this.result = {
            took_time: 0,
            hits_total: 0
        };
        this.clc = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromEvent__["a" /* fromEvent */])(window, 'scroll')
            .subscribe(function (e) {
            var d = document.documentElement;
            if (window.scrollY + d.clientHeight == d.scrollHeight) {
                console.log('bottom~');
            }
        });
        this.launchModal = function (id) {
            //console.log(id);
            var ele = document.getElementById(id);
            ele.classList.add("is-active");
        };
        this.closeModal = function (id) {
            var ele = document.getElementById(id);
            ele.classList.remove("is-active");
        };
        this.getSearch = function () {
            if (_this.query.length > 0) {
                console.log(_this.query);
                _this.queryBody.query.match.name = _this.query;
                _this.http.post("http://localhost:5000/search/lativ", _this.queryBody, _this.httpOptions)
                    .subscribe(function (datas) {
                    console.log(datas);
                    _this.response = datas.hits.hits;
                    _this.result.took_time = datas.took;
                    _this.result.hits_total = datas.hits.total;
                    _this.clothes = [];
                    console.log(_this.response);
                    if (_this.response.length > 0) {
                        _this.have_result = true;
                        _this.response.forEach(function (value, index) {
                            //console.log(value);
                            var data = value._source;
                            //console.log(data.name);
                            _this.clothes.push(data);
                            /*
                            this.clothes.name = data.name;
                            this.clothes.site = data.site;
                            this.clothes.gender = data.gender;
                            this.clothes.url = data.url;
                            this.clothes.img_url = data.img_url;
                            this.clothes.price = data.price;
                            this.clothes.store_price = data.store_price;
                            this.clothes.color = data.color;
                            this.clothes.colors = data.colors;
                            this.clothes.sizes = data.sizes;
                            this.clothes.last_updated = data.last_updated;
                            */
                        });
                    }
                });
            }
        };
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-result',
            template: __webpack_require__("./src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__("./src/app/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map