(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Beko\challnge2\src\main.ts */"zUnb");


/***/ }),

/***/ "4ai/":
/*!**********************************************************!*\
  !*** ./src/app/components/navbar/tree/tree.component.ts ***!
  \**********************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



class TreeComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        this.chartsoption = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total fruit consumption, grouped by gender'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }, {
                    name: 'Jane',
                    data: [2, 5, 6, 2, 1],
                    stack: 'female'
                }, {
                    name: 'Janet',
                    data: [3, 0, 4, 4, 3],
                    stack: 'female'
                }]
        };
    }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(); };
TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TreeComponent, selectors: [["app-tree"]], decls: 1, vars: 2, consts: [[2, "width", "100", "height", "300px", "display", "block", 3, "Highcharts", "options"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartsoption);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "8ivZ":
/*!**********************************************************!*\
  !*** ./src/app/components/navbar/show/show.component.ts ***!
  \**********************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



class ShowComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        this.chartsoption = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares in January, 2018'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                    name: 'Share',
                    data: [
                        { name: 'Chrome', y: 61.41 },
                        { name: 'Internet Explorer', y: 11.84 },
                        { name: 'Firefox', y: 10.85 },
                        { name: 'Edge', y: 4.67 },
                        { name: 'Safari', y: 4.18 },
                        { name: 'Other', y: 7.05 }
                    ]
                }]
        };
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["app-show"]], decls: 1, vars: 2, consts: [[2, "width", "100", "height", "300px", "display", "block", 3, "Highcharts", "options"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartsoption);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");



class AppComponent {
    constructor() {
        this.title = 'challnge2';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col-lg-2", "col-10"], [1, "col-lg-10", "col-10"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_navbar_show_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/show/show.component */ "8ivZ");
/* harmony import */ var _components_navbar_tree_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/tree/tree.component */ "4ai/");
/* harmony import */ var _components_navbar_text_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/text/text.component */ "axoW");
/* harmony import */ var _components_navbar_panning_panning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/panning/panning.component */ "bwfR");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_9__["HighchartsChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_navbar_show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"],
        _components_navbar_tree_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeComponent"],
        _components_navbar_text_text_component__WEBPACK_IMPORTED_MODULE_7__["TextComponent"],
        _components_navbar_panning_panning_component__WEBPACK_IMPORTED_MODULE_8__["PanningComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_9__["HighchartsChartModule"]] }); })();


/***/ }),

/***/ "axoW":
/*!**********************************************************!*\
  !*** ./src/app/components/navbar/text/text.component.ts ***!
  \**********************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



class TextComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        this.chartsoption = {
            chart: {
                type: 'area'
            },
            accessibility: {
                description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
            },
            title: {
                text: 'US and USSR nuclear stockpiles'
            },
            subtitle: {
                text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
                    'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
                    'armscontrol.org</a>'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                },
                accessibility: {
                    rangeDescription: 'Range: 1940 to 2017.'
                }
            },
            yAxis: {
                title: {
                    text: 'Nuclear weapon states'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                    name: 'USA',
                    data: [
                        null, null, null, null, null, 6, 11, 32, 110, 235,
                        369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                        20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                        26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                        21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                        10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                        5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
                    ]
                }, {
                    name: 'USSR/Russia',
                    data: [null, null, null, null, null, null, null, null, null, null,
                        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                        1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                        11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                        30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                        37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                        21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                        12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
                    ]
                }]
        };
    }
}
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(); };
TextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TextComponent, selectors: [["app-text"]], decls: 1, vars: 2, consts: [[2, "width", "100", "height", "300px", "display", "block", 3, "Highcharts", "options"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartsoption);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "bwfR":
/*!****************************************************************!*\
  !*** ./src/app/components/navbar/panning/panning.component.ts ***!
  \****************************************************************/
/*! exports provided: PanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanningComponent", function() { return PanningComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



class PanningComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        this.chartsoption = {
            title: {
                text: 'Scatter plot with regression line'
            },
            xAxis: {
                min: -0.5,
                max: 5.5
            },
            yAxis: {
                min: 0
            },
            series: [{
                    type: 'line',
                    name: 'Regression Line',
                    data: [[0, 1.11], [5, 4.51]],
                    marker: {
                        enabled: false
                    },
                    states: {
                        hover: {
                            lineWidth: 0
                        }
                    },
                    enableMouseTracking: false
                }, {
                    type: 'scatter',
                    name: 'Observations',
                    data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                    marker: {
                        radius: 4
                    }
                }]
        };
    }
}
PanningComponent.ɵfac = function PanningComponent_Factory(t) { return new (t || PanningComponent)(); };
PanningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PanningComponent, selectors: [["app-panning"]], decls: 1, vars: 2, consts: [[2, "width", "100", "height", "300px", "display", "block", 3, "Highcharts", "options"]], template: function PanningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartsoption);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5uaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show/show.component */ "8ivZ");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree/tree.component */ "4ai/");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text/text.component */ "axoW");
/* harmony import */ var _panning_panning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panning/panning.component */ "bwfR");






function NavbarComponent_app_show_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show");
} }
function NavbarComponent_app_tree_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tree");
} }
function NavbarComponent_app_text_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-text");
} }
function NavbarComponent_app_panning_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panning");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class NavbarComponent {
    constructor() {
        this.displayshows = true;
        this.displaytrees = false;
        this.displaytexts = false;
        this.displaypannings = false;
    }
    ngOnInit() {
    }
    displayshow() {
        this.displayshows = true;
        this.displaytrees = false;
        this.displaytexts = false;
        this.displaypannings = false;
    }
    displaytree() {
        this.displayshows = false;
        this.displaytrees = true;
        this.displaytexts = false;
        this.displaypannings = false;
    }
    displaytext() {
        this.displayshows = false;
        this.displaytrees = false;
        this.displaytexts = true;
        this.displaypannings = false;
    }
    displaypanning() {
        this.displayshows = false;
        this.displaytrees = false;
        this.displaytexts = false;
        this.displaypannings = true;
    }
    displaypoint() {
        this.displayshows = false;
        this.displaytrees = false;
        this.displaytexts = false;
        this.displaypannings = false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 34, vars: 16, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mb-2"], [1, ""], [1, "fa", "fa-search", "m-3"], [1, "m-3"], [1, "text-muted"], [1, "fa", "fa-search", "mr-3"], [1, "m-3", "bell"], [1, "fa", "fa-bell", "text-muted"], [1, "fa", "fa-envelope"], [1, "btn", "text-dark", "p-2", "mr-3"], [1, "btn", "btn-primary", "text-white", "p-2", "mr-3"], [1, "btn", "text-dark", "p-2"], [1, "p-4"], [1, "m-3", 3, "ngClass", "click"], [1, "fas", "fa-chart-pie", "fa-4x", "text-info"], [1, "fa", "fa-chart-line", "fa-4x", "mr-5", "text-danger"], [1, "fa", "fa-chart-bar", "fa-4x", "mr-5", "text-warning"], [1, "fa", "fa-chart-area", "fa-4x", "mr-5"], [4, "ngIf"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "contanst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "graph type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "graph type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "graph type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_22_listener() { return ctx.displayshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_24_listener() { return ctx.displaytree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_26_listener() { return ctx.displaytext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_28_listener() { return ctx.displaypanning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_app_show_30_Template, 1, 0, "app-show", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_app_tree_31_Template, 1, 0, "app-tree", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NavbarComponent_app_text_32_Template, 1, 0, "app-text", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NavbarComponent_app_panning_33_Template, 1, 0, "app-panning", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.displayshows === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.displaytrees === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.displaytexts === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.displaypannings === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayshows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displaytrees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displaytexts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displaypannings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"], _text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"], _panning_panning_component__WEBPACK_IMPORTED_MODULE_5__["PanningComponent"]], styles: [".bell[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.bell[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 10px;\n  background-color: orangered;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxrQkFBQTtBQURGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFGRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJlbGxcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cclxufVxyXG5cclxuLmJlbGw6OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 85, vars: 0, consts: [[1, "sidebar"], ["href", "", 1, "navbar-brand", "text-white", "d-block", "py-3", "p-3", "mb-3", "border-bottom"], [1, "fa", "fa-car", "bg-secondary", "p-2", "rounded-circle"], [1, "border-bottom", "p-3"], ["src", "../../../assets/img/user8-128x128.jpg", "width", "40", "alt", "", 1, "rounded-circle", "m-2"], ["href", "", 1, "text-white", "text-decoration-none"], [1, "input-group", "flex-nowrap", "p-2"], ["type", "text", "placeholder", "search", 1, "form-control", "bg-dark"], [1, "input-group-prepend"], [1, "input-group-text", "bg-dark", "rounded-sm", "text-white", "p-3"], [1, "fa", "fa-search"], [1, "navbar-nav", "mt-3", "flex-column"], [1, "nav-item", "p-2"], ["href", "", 1, "nav-link", "p-2", "pb-2", "text-white", "currnt"], [1, "fa", "fa-home", "fa-2x", "m-2", "text-light"], ["href", "", 1, "nav-link", "p-2", "pb-2", "text-white", "sidebar-link"], [1, "fa", "fa-circle-notch", "fa-2x", "m-2", "text-light"], [1, "fab", "fa-critical-role", "fa-2x", "m-2", "text-light"], [1, "fa", "fa-wind", "fa-2x", "m-2", "text-light"], [1, "fa", "fa-layer-group", "fa-2x", "m-2", "text-light"], [1, "fas", "fa-chart-pie", "fa-2x", "m-2", "text-light"], [1, "fa", "fa-window-close", "fa-2x", "m-2", "text-light"], [1, "fab", "fa-wpforms", "fa-2x", "m-2", "text-light"], [1, "p-2", "text-white", "text-capitalize"], [1, "fa", "fa-mobile", "fa-2x", "m-2", "text-light"], [1, "fa", "fa-vihara", "fa-2x", "m-2", "text-light"], [1, "fa", "fa-clinic-medical", "fa-2x", "m-2", "text-light"], [1, "fa", "fa-kaaba", "fa-2x", "m-2", "text-light"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " dachpoard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "dachbourd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "dashbord 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "dashboard2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "dashboard3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "layout option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ui element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "beko");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "ui element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "beko");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  box-shadow: 2px 5px 7px #999;\n}\n\n.sidebar-link[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  border-radius: 10px;\n}\n\n.sidebar-link[_ngcontent-%COMP%]:hover {\n  background: gainsboro;\n  color: black;\n}\n\n.currnt[_ngcontent-%COMP%] {\n  transition: all 1s;\n  background-color: #4a4a91;\n  border-radius: 10px;\n  color: black;\n}\n\n.currnt[_ngcontent-%COMP%]:hover {\n  color: grey;\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUxGOztBQU9BO0VBRUUsV0FBQTtFQUNBLDJCQUFBO0FBTEYiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBib3gtc2hhZG93OiAycHggNXB4IDdweCAjOTk5O1xyXG59XHJcblxyXG4uc2lkZWJhci1saW5re1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1saW5rOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4uY3Vycm50e1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzQsIDc0LCAxNDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jdXJybnQ6aG92ZXJ7XHJcblxyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map