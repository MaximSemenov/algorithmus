webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"appWrapper\">\n\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highlightJsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_problem_service__ = __webpack_require__("../../../../../src/app/services/problem.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__problem_problem_component__ = __webpack_require__("../../../../../src/app/problem/problem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__solution_solution_component__ = __webpack_require__("../../../../../src/app/solution/solution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__productivity_productivity_component__ = __webpack_require__("../../../../../src/app/productivity/productivity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__atob_pipe__ = __webpack_require__("../../../../../src/app/atob.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_highlight_js__ = __webpack_require__("../../../../highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_highlight_js__ = __webpack_require__("../../../../angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/home/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__productivity_failed_failed_component__ = __webpack_require__("../../../../../src/app/productivity/failed/failed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__productivity_success_success_component__ = __webpack_require__("../../../../../src/app/productivity/success/success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] },
    { path: 'problem/:id', component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] }
];
function highlightJsFactory() {
    return __WEBPACK_IMPORTED_MODULE_17_highlight_js__;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__problem_problem_component__["a" /* ProblemComponent */],
                __WEBPACK_IMPORTED_MODULE_13__solution_solution_component__["a" /* SolutionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__productivity_productivity_component__["a" /* ProductivityComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__atob_pipe__["a" /* AtobPipe */],
                __WEBPACK_IMPORTED_MODULE_19__home_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__productivity_failed_failed_component__["a" /* FailedComponent */],
                __WEBPACK_IMPORTED_MODULE_21__productivity_success_success_component__["a" /* SuccessComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular_highlight_js__["b" /* HighlightJsModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_18_angular_highlight_js__["a" /* HIGHLIGHT_JS */],
                    useFactory: highlightJsFactory
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_1__services_problem_service__["a" /* ProblemService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/atob.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtobPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtobPipe = (function () {
    function AtobPipe() {
    }
    AtobPipe.prototype.transform = function (value) {
        return atob(value);
    };
    AtobPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'atob'
        })
    ], AtobPipe);
    return AtobPipe;
}());

//# sourceMappingURL=atob.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"componentWrapper\">\n\n\n    \n        <app-problem></app-problem>\n        <app-solution></app-solution>\n        <app-productivity></app-productivity>\n \n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"components\" id=\"problemComponent\">\n    \n    <app-problem></app-problem>\n    <app-solution></app-solution>\n    <app-productivity></app-productivity>\n    </mat-card>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/home/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.dropDownList {\n    padding: 15px 1px 6px 6px;\n    font-size: 0.8em;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    margin-bottom: 7px;\n}\n\na:link {\n    color: black;\n    text-decoration: none;\n}\n\na:visited {\n    color: black;\n}\n\na:hover {\n    color: hotpink;\n}\n\n\n/* .active {\n    color: red;\n} */\n\na:visited.active {\n    color: red;\n}\n\nmat-card#nav {\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navigationComponent\">\n    <mat-card id=\"nav\">\n\n        <ul>\n            <li>\n                <a routerLink=\"/home\" routerLinkActive=\"active\">\n                    Home\n                </a>\n            </li>\n        </ul>\n\n        <ol>\n\n            <li>\n                <a [routerLink]=\"['/problem/0']\" (click)=\"isDropDownOpen = !isDropDownOpen\"> Basic Algorithm Scripting </a>\n                <ul *ngIf=\"isDropDownOpen\" class=\"dropDownList\">\n                    <li *ngFor=\"let link of links\">\n\n                        <a [routerLink]=\"['/problem', link.id]\" routerLinkActive=\"active\">\n                            {{link.title}}\n                        </a>\n\n                    </li>\n                </ul>\n\n            </li>\n\n            <li>\n                <a href=\"#\">Intermediate Algorithm Scripting</a>\n            </li>\n            <li>\n                <a href=\"#\"> Advanced Algorithm Scripting</a>\n            </li>\n\n            <li>\n                <a href=\"#\"> Functional Programming in Javascript</a>\n            </li>\n        </ol>\n\n\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(navService) {
        this.navService = navService;
        this.isDropDownOpen = false;
        this.ff = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.links = this.navService.getAllLinks();
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/problem/problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem/problem.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card class=\"components\" id=\"problemComponent\">\n\n    <p id=\"cardTitle\">Problem card:</p>\n    <h2> {{problemTitleAndDescription?.title}}</h2>\n    <p> {{problemTitleAndDescription?.description}}</p>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/problem/problem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_problem_service__ = __webpack_require__("../../../../../src/app/services/problem.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProblemComponent = (function () {
    function ProblemComponent(problemService, route) {
        this.problemService = problemService;
        this.route = route;
    }
    ProblemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pluck('id')
            .filter(Boolean)
            .switchMap(function (id) { return _this.problemService.getProblem(+id); })
            .subscribe(function (problem) { return _this.problemTitleAndDescription = {
            title: problem.title,
            description: problem.description
        }; });
    };
    ProblemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-problem',
            template: __webpack_require__("../../../../../src/app/problem/problem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/problem/problem.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_problem_service__["a" /* ProblemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_problem_service__["a" /* ProblemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ProblemComponent);
    return ProblemComponent;
    var _a, _b;
}());

//# sourceMappingURL=problem.component.js.map

/***/ }),

/***/ "../../../../../src/app/productivity/failed/failed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".testFailed {\n\n    color: #d14;\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productivity/failed/failed.component.html":
/***/ (function(module, exports) {

module.exports = "<img id=\"testStatus\" src=\"./assets/no-icon.jpg\">\nThe value\n<span id=\"passedValue\">{{testResult.testUnit}}</span>\nhas been passed. Executed result is\n<span id=\"solutionResult\">{{testResult.result}}</span>. The correct result is\n<span id=\"correctResult\">{{testResult.expedtedResult}}</span>.\n<span class=\"testFailed\"> Test failed ... </span>"

/***/ }),

/***/ "../../../../../src/app/productivity/failed/failed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FailedComponent = (function () {
    function FailedComponent() {
    }
    FailedComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FailedComponent.prototype, "testResult", void 0);
    FailedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-failed',
            template: __webpack_require__("../../../../../src/app/productivity/failed/failed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productivity/failed/failed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FailedComponent);
    return FailedComponent;
}());

//# sourceMappingURL=failed.component.js.map

/***/ }),

/***/ "../../../../../src/app/productivity/productivity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-button-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nspan#passedValue {\n    background-color: gainsboro;\n    border-radius: 2px;\n    font-size: 1.1em;\n    padding: 2px;\n}\n\nspan#solutionResult {\n    background-color: gainsboro;\n    /* border: 1px solid black; */\n    border-radius: 2px;\n    font-size: 1.1em;\n    padding: 2px;\n}\n\nspan#correctResult {\n    background-color: #A6E22E;\n    /* border: 1px solid black; */\n    border-radius: 2px;\n    font-size: 1.1em;\n    padding: 2px;\n}\n\nli#listAcceptanceReport {\n    padding-bottom: 8px;\n    font-size: 0.95em;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: block;\n    clear: both;\n    visibility: hidden;\n    height: 0;\n}\n\nul {\n    padding-left: 0px;\n    list-style-type: none;\n}\n\nimg#testStatus {\n    width: 30px;\n    vertical-align: middle;\n    border-radius: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productivity/productivity.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"components clearfix\" id=\"productivityComponent\">\n\n\n    <p id=\"cardTitle\">Productivity card:</p>\n\n    <button mat-raised-button color=\"primary\" (click)=\"openPerformanceCard($event.target)\">Test Performance</button>\n\n    <div id=\"report\" *ngIf=\"isReportShown\">\n        <h3>Solution performance report:</h3>\n        <p>This function has been executed:\n            <b>1000 times. </b>\n        </p>\n        <p>The performance time:\n            <b> {{performanceTime}} milliseconds. </b>\n        </p>\n        <p>The performance time:\n            <b> {{performanceTime / 1000}} seconds. </b>\n        </p>\n\n        <h3>Acceptance test report:</h3>\n\n        <ul>\n\n            <li *ngFor=\"let test of testResults\" id=\"listAcceptanceReport\">\n\n                <app-failed *ngIf=\"!test.testResult.passed\" [testResult]=\"test.testResult\"></app-failed>\n                <app-success *ngIf=\"test.testResult.passed\" [testResult]=\"test.testResult\"></app-success>\n\n            </li>\n        </ul>\n    </div>\n\n\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/productivity/productivity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_problem_service__ = __webpack_require__("../../../../../src/app/services/problem.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductivityComponent = (function () {
    function ProductivityComponent(problemService, route, router) {
        var _this = this;
        this.problemService = problemService;
        this.route = route;
        this.router = router;
        this.isReportShown = false;
        this.testResults = [];
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.isReportShown = false;
            }
        });
    }
    ProductivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemSolutionSubscribtion = this.route.params
            .pluck('id')
            .filter(Boolean)
            .switchMap(function (id) { return _this.problemService.getProblem(+id); })
            .map(function (base64Problem) {
            base64Problem.solution = atob(base64Problem.solution);
            return base64Problem;
        })
            .subscribe(function (problem) { return _this.problemSolution = problem.solution; });
    };
    ProductivityComponent.prototype.openPerformanceCard = function (testPerformanceButton) {
        if (!this.isReportShown) {
            this.executeSolution();
            this.isReportShown = !this.isReportShown;
            testPerformanceButton.textContent = 'Close it';
            return;
        }
        testPerformanceButton.textContent = 'Test Performance';
        this.isReportShown = false;
    };
    ProductivityComponent.prototype.executeSolution = function () {
        var _this = this;
        var startTime = +new Date();
        Array(1000).fill(1).forEach(function () {
            eval(_this.problemSolution);
        });
        var endTime = +new Date();
        this.test();
        return this.performanceTime = endTime - startTime;
    };
    ProductivityComponent.prototype.test = function () {
        var _this = this;
        var testedFunction = eval(this.problemSolution);
        var test = [
            { testUnit: 'eye', rightResult: true },
            { testUnit: '_eye', rightResult: true },
            { testUnit: 'Hello', rightResult: true },
            { testUnit: 'race car', rightResult: true },
            { testUnit: 'not a palindrome', rightResult: false },
            { testUnit: 'A man, a plan, a canal. Panama', rightResult: true },
            { testUnit: 'never odd or even', rightResult: true },
            { testUnit: 'nope', rightResult: false },
            { testUnit: 'almostomla', rightResult: false },
            { testUnit: 'My age is 0, 0 si ega ym.', rightResult: true }
        ];
        test.forEach(function (item) {
            var functionExecution = testedFunction(item.testUnit);
            _this.testResults.push({
                testUnit: item.testUnit,
                testResult: {
                    result: functionExecution,
                    expectedResult: item.rightResult,
                    passed: functionExecution === item.rightResult
                }
            });
        });
    };
    ProductivityComponent.prototype.ngOnDestroy = function () {
        this.problemSolutionSubscribtion.unsubscribe();
    };
    ProductivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productivity',
            template: __webpack_require__("../../../../../src/app/productivity/productivity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productivity/productivity.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_problem_service__["a" /* ProblemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_problem_service__["a" /* ProblemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], ProductivityComponent);
    return ProductivityComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=productivity.component.js.map

/***/ }),

/***/ "../../../../../src/app/productivity/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".testSuccess {\n    \n        color: green;\n    \n    \n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productivity/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<img id=\"testStatus\" src=\"./assets/ok-icon.jpg\"> The value\n<span id=\"passedValue\">{{testResult.testUnit}}</span>\nhas been passed.\n<span class=\"testSuccess\"> Test passed !</span>"

/***/ }),

/***/ "../../../../../src/app/productivity/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SuccessComponent.prototype, "testResult", void 0);
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/productivity/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productivity/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());

//# sourceMappingURL=success.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationService = (function () {
    function NavigationService() {
        this.links = [
            { id: 0, title: 'Check for Palindromes' },
            { id: 1, title: 'Reverse a String' },
            { id: 2, title: 'Factorialize a Number' }
        ];
    }
    NavigationService.prototype.getAllLinks = function () {
        return this.links;
    };
    NavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());

//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/problem.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProblemService = (function () {
    function ProblemService(http) {
        this.http = http;
    }
    ProblemService.prototype.getProblem = function (id) {
        if (!this.problemsCache) {
            this.problemsCache = this.http.get('./assets/base64_problems.json')
                .first();
        }
        return this.problemsCache
            .map(function (problems) {
            return problems.filter(function (problem) { return problem.id === id; })[0];
        });
    };
    ProblemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ProblemService);
    return ProblemService;
    var _a;
}());

//# sourceMappingURL=problem.service.js.map

/***/ }),

/***/ "../../../../../src/app/solution/solution.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution/solution.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"components\" id=\"solutionComponent\">\n\n    <p id=\"cardTitle\">Solution card:</p>\n\n<!-- \n    <p> {{problemSolution$| async | atob  }}  </p> -->\n    <pre><code mwlHighlightJs [source]=\"problemSolution$| async | atob \" language=\"javascript\" ></code></pre>\n\n\n</mat-card>\n\n\n\n<!-- <div class=\"components\" id=\"solutionComponent\">solution div</div> -->"

/***/ }),

/***/ "../../../../../src/app/solution/solution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_problem_service__ = __webpack_require__("../../../../../src/app/services/problem.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SolutionComponent = (function () {
    function SolutionComponent(problemService, route) {
        this.problemService = problemService;
        this.route = route;
    }
    SolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemSolution$ = this.route.params
            .pluck('id')
            .filter(Boolean)
            .switchMap(function (id) { return _this.problemService.getProblem(+id); })
            .pluck('solution');
        this.problemSolutionSubscribtion = this.route.params
            .pluck('id')
            .filter(Boolean)
            .switchMap(function (id) { return _this.problemService.getProblem(+id); })
            .map(function (base64Problem) {
            base64Problem.solution = atob(base64Problem.solution);
            return base64Problem;
        })
            .subscribe(function (problem) { return _this.problemSolution = problem.solution; });
    };
    SolutionComponent.prototype.ngOnDestroy = function () {
        this.problemSolutionSubscribtion.unsubscribe();
    };
    SolutionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-solution',
            template: __webpack_require__("../../../../../src/app/solution/solution.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solution/solution.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_problem_service__["a" /* ProblemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_problem_service__["a" /* ProblemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], SolutionComponent);
    return SolutionComponent;
    var _a, _b;
}());

//# sourceMappingURL=solution.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map