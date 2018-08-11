(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n\ttext-align: center;\r\n\tmargin-bottom: 0;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<header class=\"jumbotron\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<h1> {{ title }} <span class=\"badge badge-secondary\">Test</span></h1>\r\n\t\t\t<h4> {{ secondtitle }} </h4>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<app-form></app-form>\r\n\r\n\t<footer class=\"jumbotron\">\r\n    \t<h6> © {{ copyrights }} </h6>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'URL Shortener';
        this.secondtitle = 'Making a shorter url';
        this.copyrights = 'URL Shortener | 2018';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\r\n    margin-top: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"added_urls == false\" class=\"col-sm-12 col-md-8 offset-md-2 jumbotron\">\r\n      <label for=\"basic-url\">Your URl</label>\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"text\" class=\"form-control\" id=\"basic-url\" (blur)=\"check_onBlur_general($event)\" aria-describedby=\"basic-addon3\">\r\n      </div>\r\n\r\n      <div *ngIf=\"check_general_url == false\" class=\"alert alert-danger\">Url is invalid. Please, check this or try later</div>\r\n\r\n\r\n      <label for=\"basic-url\">Shortener URL\r\n      </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"basic-addon3\">{{ url }}</span>\r\n        </div>\r\n        <input type=\"text\" (keyup)=\"onKey($event)\" (onBlur)=\"check_onBlur_short($event)\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\r\n        <br/>\r\n      </div>\r\n      \r\n      <small id=\"inputHelp\" class=\"text-muted input-group mb-3\">\r\n          Leave this field empty if you wanna generate an url\r\n      </small>\r\n\r\n      <div *ngIf=\"check_shorter_url == false\" class=\"alert alert-danger\">This url already exist. Please, change url.</div>\r\n      \r\n      <div class=\"input-group mb-3\">\r\n        <button [disabled]='checks_url ? false : true' type=\"button\" class=\"btn btn-primary\">Generate</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n      \r\n    <div *ngIf=\"added_urls == true\" class=\"col-sm-12 col-md-8 offset-md-2 jumbotron\">\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"text\" value=\"{{ value }}\" class=\"form-control\" aria-label=\"Copy link\" aria-describedby=\"button-addon1\" readonly>\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon1\">Copy</button>\r\n        </div>\r\n      </div>\r\n      \r\n      <small id=\"inputHelp\" class=\"text-muted input-group mb-3\">\r\n          The URL pair will be deleted after 15 days\r\n      </small>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _form_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.services */ "./src/app/form/form.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(service) {
        this.service = service;
        this.url = "https://example.com/";
        this.value = this.url;
        this.check_general_url = true; // checking url where will be redirected
        this.check_shorter_url = true; // checking short url 
        this.done = true;
        this.added_urls = false;
        this.checks_url = false;
    }
    FormComponent.prototype.onKey = function (event) {
        this.value = this.url + event.target.value;
    };
    FormComponent.prototype.check_onBlur_general = function (event) {
        var _this = this;
        this
            .service
            .check_general_url(event.target.value)
            .subscribe(function (data) { return _this.check_general_url = data['status']; });
    };
    FormComponent.prototype.check_onBlur_short = function (event) {
        var _this = this;
        this
            .service
            .check_short_url(event.target.value)
            .subscribe(function (data) { return _this.check_general_url = data['status']; });
    };
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")],
            providers: [_form_services__WEBPACK_IMPORTED_MODULE_1__["Service"]]
        }),
        __metadata("design:paramtypes", [_form_services__WEBPACK_IMPORTED_MODULE_1__["Service"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/form/form.services.ts":
/*!***************************************!*\
  !*** ./src/app/form/form.services.ts ***!
  \***************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
};
var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
        this.check_url_general = '/checkgeneralurl';
        this.check_url_short = '/checkshorturl';
    }
    Service.prototype.check_general_url = function (checked_url) {
        return this.http.post(this.check_url_general, 'checked_url=' + checked_url, httpOptions);
    };
    Service.prototype.check_short_url = function (checked_url) {
        return this.http.post(this.check_url_short, 'checked_url=' + checked_url, httpOptions);
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenServer\OpenServer\domains\URLShortener\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map