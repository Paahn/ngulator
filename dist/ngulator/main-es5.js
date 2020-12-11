(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  My Calculator, the ngulator!\n</h1>\n<ngulator></ngulator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ngulator/ngulator.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ngulator/ngulator.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngulator\">\n  <h1>ngulator</h1>\n  <div>\n    <textarea class=\"result\" type=\"text\" readonly value=\"{{ result }}\"></textarea>\n    </div>\n    \n    <button class=\"responsive clear\" (click)=\"clearMyScreen()\">\n      {{ clearButton }}\n    </button>\n    \n    <button class=\"responsive\" *ngFor=\"let number of numbers\" (click)=\"operate(number)\">\n      {{ number }}\n    </button>\n    \n    <button class=\"responsive\" (click)=\"setOperator('+')\">\n      +\n    </button>\n    \n    <button class=\"responsive\" (click)=\"setOperator('-')\">\n      -\n    </button>\n    \n    <button class=\"responsive\" (click)=\"setOperator('*')\">\n      *\n    </button>\n    \n    <button class=\"responsive\"(click)=\"setOperator('/')\">\n      /\n    </button>\n    \n    <button class=\"responsive clear\" (click)=\"executeOp()\">\n      {{ execute }}\n    </button>\n    \n    <div>\n      <p class=\"qq\">Calculating was never this easy!</p>\n    </div>\n</div>"

/***/ }),

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

module.exports = "h1 {\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngulator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngulator_ngulator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngulator/ngulator.component */ "./src/app/ngulator/ngulator.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ngulator_ngulator_component__WEBPACK_IMPORTED_MODULE_4__["NgulatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ngulator/ngulator.component.css":
/*!*************************************************!*\
  !*** ./src/app/ngulator/ngulator.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  margin-top: 0px;\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.ngulator {\n  background-color: rgb(243, 238, 231);\n  position: relative;\n  margin: 7% auto auto auto;\n  width: 400px;\n  text-align: center;\n  border-color: rgb(99, 94, 97);\n  border-radius: 20px;\n  box-shadow: inset 2px 0px 10px -5px rgb(85, 80, 83),\n              inset -5px 0px 15px -5px rgb(85, 80, 83),\n              inset 10px 0px 10px -12px rgb(85, 80, 83),\n              inset -2px 0px 4px 2px rgb(85, 80, 83),\n              inset -2px 0px 10px 0px rgb(85, 80, 83);\n}\n\n.result {\n  border-radius: 10px;\n}\n\nbutton {\n  border-radius: 8px;\n  width: 80px;\n  height: 65px;\n  font-size: 20px;\n  border: 3px solid;\n  border-color: rgb(87, 85, 85);\n  margin: 2px 2px 8px 2px;\n  -webkit-transition-duration: 0.5s;\n          transition-duration: 0.5s;\n  box-shadow: inset 5px 0 15px -5px rgb(109, 103, 106),\n              inset -3px 0 15px -5px rgb(109, 103, 106),\n              inset 0px -5px 0px -3px rgb(109, 103, 106),\n              inset 0px 2px rgb(109, 103, 106),\n              inset 0px 5px 15px 0px rgb(109, 103, 106);\n}\n\n.clear {\n  width: 170px;\n}\n\n.responsive:hover {\n  background-color: rgb(138, 134, 134);\n  color: rgb(247, 240, 240);\n  box-shadow: inset 5px 0px 15px -5px rgb(199, 192, 182),\n              inset -3px 0px 15px -5px rgb(199, 192, 182),\n              inset 0px -5px 0px -3px rgb(199, 192, 182),\n              inset 0px 2px rgb(199, 192, 182),\n              inset 0px 5px 15px 0 rgb(199, 192, 182);\n}\n\ntextarea {\n  width: 350px;\n  height: 60px;\n  text-align: right;\n  font-size: 3.7em;\n}\n\n.gimme-space {\n  bottom: 30px;\n}\n\n.qq {\n  height: 60px;\n  text-align: center;\n  font-size: 1.7em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmd1bGF0b3Ivbmd1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQjs7OztxREFJbUQ7QUFDckQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qjs7Ozt1REFJcUQ7QUFDdkQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCOzs7O3FEQUltRDtBQUNyRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmd1bGF0b3Ivbmd1bGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5ndWxhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjM4LCAyMzEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNyUgYXV0byBhdXRvIGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sb3I6IHJnYig5OSwgOTQsIDk3KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDBweCAxMHB4IC01cHggcmdiKDg1LCA4MCwgODMpLFxuICAgICAgICAgICAgICBpbnNldCAtNXB4IDBweCAxNXB4IC01cHggcmdiKDg1LCA4MCwgODMpLFxuICAgICAgICAgICAgICBpbnNldCAxMHB4IDBweCAxMHB4IC0xMnB4IHJnYig4NSwgODAsIDgzKSxcbiAgICAgICAgICAgICAgaW5zZXQgLTJweCAwcHggNHB4IDJweCByZ2IoODUsIDgwLCA4MyksXG4gICAgICAgICAgICAgIGluc2V0IC0ycHggMHB4IDEwcHggMHB4IHJnYig4NSwgODAsIDgzKTtcbn1cblxuLnJlc3VsdCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoODcsIDg1LCA4NSk7XG4gIG1hcmdpbjogMnB4IDJweCA4cHggMnB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBib3gtc2hhZG93OiBpbnNldCA1cHggMCAxNXB4IC01cHggcmdiKDEwOSwgMTAzLCAxMDYpLFxuICAgICAgICAgICAgICBpbnNldCAtM3B4IDAgMTVweCAtNXB4IHJnYigxMDksIDEwMywgMTA2KSxcbiAgICAgICAgICAgICAgaW5zZXQgMHB4IC01cHggMHB4IC0zcHggcmdiKDEwOSwgMTAzLCAxMDYpLFxuICAgICAgICAgICAgICBpbnNldCAwcHggMnB4IHJnYigxMDksIDEwMywgMTA2KSxcbiAgICAgICAgICAgICAgaW5zZXQgMHB4IDVweCAxNXB4IDBweCByZ2IoMTA5LCAxMDMsIDEwNik7XG59XG5cbi5jbGVhciB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLnJlc3BvbnNpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAxMzQsIDEzNCk7XG4gIGNvbG9yOiByZ2IoMjQ3LCAyNDAsIDI0MCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCAwcHggMTVweCAtNXB4IHJnYigxOTksIDE5MiwgMTgyKSxcbiAgICAgICAgICAgICAgaW5zZXQgLTNweCAwcHggMTVweCAtNXB4IHJnYigxOTksIDE5MiwgMTgyKSxcbiAgICAgICAgICAgICAgaW5zZXQgMHB4IC01cHggMHB4IC0zcHggcmdiKDE5OSwgMTkyLCAxODIpLFxuICAgICAgICAgICAgICBpbnNldCAwcHggMnB4IHJnYigxOTksIDE5MiwgMTgyKSxcbiAgICAgICAgICAgICAgaW5zZXQgMHB4IDVweCAxNXB4IDAgcmdiKDE5OSwgMTkyLCAxODIpO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAzLjdlbTtcbn1cblxuLmdpbW1lLXNwYWNlIHtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG4ucXEge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ngulator/ngulator.component.ts":
/*!************************************************!*\
  !*** ./src/app/ngulator/ngulator.component.ts ***!
  \************************************************/
/*! exports provided: NgulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgulatorComponent", function() { return NgulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgulatorComponent = /** @class */ (function () {
    function NgulatorComponent() {
        this.operator = '';
        this.result = '';
        this.nums = [];
        this.clearButton = 'clear';
        this.numbers = ['9', '0', '5', '6', '7', '8', '1', '2', '3', '4'];
        this.operators = ['+', '-', '*', '/'];
        this.execute = '=';
        this.runMe = false;
    }
    NgulatorComponent.prototype.clearMyScreen = function () {
        this.result = '';
        this.nums = [];
        this.operator = '';
    };
    ;
    NgulatorComponent.prototype.setError = function () {
        this.result = 'ERROR';
    };
    NgulatorComponent.prototype.setOperator = function (value) {
        this.screen(value);
        this.operator = value;
    };
    ;
    NgulatorComponent.prototype.executeOp = function () {
        if (this.operator == '+') {
            this.result = (this.add(this.nums[0], this.nums[1])).toString();
        }
        else if (this.operator == "-") {
            this.result = (this.subtract(this.nums[0], this.nums[1])).toString();
        }
        else if (this.operator == "/") {
            this.result = (this.divide(this.nums[0], this.nums[1])).toString();
        }
        else if (this.operator == "*") {
            this.result = (this.multiply(this.nums[0], this.nums[1])).toString();
        }
    };
    NgulatorComponent.prototype.add = function (a, b) {
        a = parseInt(a);
        b = parseInt(b);
        return a + b;
    };
    ;
    NgulatorComponent.prototype.subtract = function (a, b) {
        a = parseInt(a);
        b = parseInt(b);
        return a - b;
    };
    ;
    NgulatorComponent.prototype.divide = function (a, b) {
        a = parseInt(a);
        b = parseInt(b);
        return parseFloat((a / b).toFixed(6));
    };
    ;
    NgulatorComponent.prototype.multiply = function (a, b) {
        a = parseInt(a);
        b = parseInt(b);
        return a * b;
    };
    ;
    NgulatorComponent.prototype.screen = function (expression) {
        this.result += expression.toString();
    };
    ;
    NgulatorComponent.prototype.operate = function (number) {
        this.screen(number);
        this.nums.push(number);
        if (this.operator == '')
            return;
        if (this.nums.length != 2) {
            this.setError();
        }
        if (this.nums.length == 2 && this.operator) {
            this.runMe = true;
        }
        else {
            this.executeOp();
        }
    };
    NgulatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngulator',
            template: __webpack_require__(/*! raw-loader!./ngulator.component.html */ "./node_modules/raw-loader/index.js!./src/app/ngulator/ngulator.component.html"),
            styles: [__webpack_require__(/*! ./ngulator.component.css */ "./src/app/ngulator/ngulator.component.css")]
        })
    ], NgulatorComponent);
    return NgulatorComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paahn/Code/projects/ngulator-reloaded/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map