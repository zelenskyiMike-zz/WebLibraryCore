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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "body{\r\n  background-color: antiquewhite;\r\n}\r\n.content-main{\r\n  margin-left : 21%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <nav-menu></nav-menu>\r\n</div>\r\n\r\n<div class=\"container content-main\">\r\n\r\n  <button kendoButton  [routerLink]=\"['/']\" [primary]=\"true\">My Kendo UI Button</button>\r\n\r\n  <!--SIMPLE ANALOG OF TOOLBAR-->\r\n\r\n  <!--<button kendoButton  [routerLink]=\"['/edit/:{id}']\" [primary]=\"true\">My Kendo UI Button</button>-->\r\n\r\n  <!--<button kendoButton (click)=\"onButtonClick()\" [primary]=\"true\">My Kendo UI Button</button>-->\r\n\r\n  <br />\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _book_book_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book/book-list.component */ "./src/app/book/book-list.component.ts");
/* harmony import */ var _book_book_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book/book-create.component */ "./src/app/book/book-create.component.ts");
/* harmony import */ var _book_book_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book/book-edit.component */ "./src/app/book/book-edit.component.ts");
/* harmony import */ var _book_book_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book/book-delete.component */ "./src/app/book/book-delete.component.ts");
/* harmony import */ var _book_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book/not-found.component */ "./src/app/book/not-found.component.ts");
/* harmony import */ var _book_data_bookService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book/data.bookService */ "./src/app/book/data.bookService.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//BOOK






//KENDO UI


//ANGULAR ANIMATIONS

//import { MagazineComponent } from './magazine/magazine.component';
//import { DataMagazineService } from './magazine/data.magazineService';
var appRoutes = [
    { path: '', component: _book_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"] },
    { path: 'create', component: _book_book_create_component__WEBPACK_IMPORTED_MODULE_9__["BookCreateComponent"] },
    { path: 'edit/:id', component: _book_book_edit_component__WEBPACK_IMPORTED_MODULE_10__["BookEditComponent"] },
    { path: 'delete/:id', component: _book_book_delete_component__WEBPACK_IMPORTED_MODULE_11__["BookDeleteComponent"] },
    { path: '*', component: _book_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _book_book_delete_component__WEBPACK_IMPORTED_MODULE_11__["BookDeleteComponent"],
                _book_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"],
                _book_book_create_component__WEBPACK_IMPORTED_MODULE_9__["BookCreateComponent"],
                _book_book_edit_component__WEBPACK_IMPORTED_MODULE_10__["BookEditComponent"],
                _book_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _book_data_bookService__WEBPACK_IMPORTED_MODULE_13__["DataBookService"], _book_book_delete_component__WEBPACK_IMPORTED_MODULE_11__["BookDeleteComponent"], _book_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"], _book_book_create_component__WEBPACK_IMPORTED_MODULE_9__["BookCreateComponent"], _book_book_edit_component__WEBPACK_IMPORTED_MODULE_10__["BookEditComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _book_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book-create.component.html":
/*!*************************************************!*\
  !*** ./src/app/book/book-create.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Добавление новой книги</h2>\r\n    <!--<book-form [(book)]=\"book\"></book-form>-->\r\n    <div class=\"form-group\">\r\n        <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <a routerLink=\"/\" class=\"btn btn-warning\">Отмена</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book/book-create.component.ts":
/*!***********************************************!*\
  !*** ./src/app/book/book-create.component.ts ***!
  \***********************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_bookService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.bookService */ "./src/app/book/data.bookService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
    }
    BookCreateComponent.prototype.save = function () {
        var _this = this;
        this.bookService.createBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book/book-create.component.html")
        }),
        __metadata("design:paramtypes", [_data_bookService__WEBPACK_IMPORTED_MODULE_2__["DataBookService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book/book-delete.component.html":
/*!*************************************************!*\
  !*** ./src/app/book/book-delete.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label>Название Delete</label>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/book/book-delete.component.ts":
/*!***********************************************!*\
  !*** ./src/app/book/book-delete.component.ts ***!
  \***********************************************/
/*! exports provided: BookDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDeleteComponent", function() { return BookDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_bookService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.bookService */ "./src/app/book/data.bookService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDeleteComponent = /** @class */ (function () {
    function BookDeleteComponent(dataService) {
        this.dataService = dataService;
    }
    BookDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book-delete.component.html */ "./src/app/book/book-delete.component.html")
        }),
        __metadata("design:paramtypes", [_data_bookService__WEBPACK_IMPORTED_MODULE_1__["DataBookService"]])
    ], BookDeleteComponent);
    return BookDeleteComponent;
}());



/***/ }),

/***/ "./src/app/book/book-edit.component.html":
/*!***********************************************!*\
  !*** ./src/app/book/book-edit.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <h2>Изменение данных о книге</h2>\r\n  <div class=\"form-group\">\r\n\r\n    <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n  </div>\r\n</div>\r\n<a routerLink=\"/\" class=\"nav-link\">Назад к списку</a>\r\n\r\n"

/***/ }),

/***/ "./src/app/book/book-edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/book/book-edit.component.ts ***!
  \*********************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_bookService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.bookService */ "./src/app/book/data.bookService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(bookService, router, activeRoute) {
        this.bookService = bookService;
        this.router = router;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.id);
        // if (this.loaded) {
        this.bookService.updateBook(this.book);
        //}
        //else {
        //}
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.bookService.getBook(this.id).subscribe(function (data) {
            _this.book = data;
            ////for what???////
            if (_this.book != null) {
                _this.loaded = true;
            }
        });
    };
    BookEditComponent.prototype.save = function () {
        var _this = this;
        this.bookService.updateBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book/book-edit.component.html")
        }),
        __metadata("design:paramtypes", [_data_bookService__WEBPACK_IMPORTED_MODULE_2__["DataBookService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book/book-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/book/book-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\r\n<br />\r\n<div class=\"form-group\">\r\n  <label>List of books</label>\r\n</div>\r\n<!--<ng-template #readOnlyTemplate let-books>-->\r\n<kendo-grid [data]=\"books\"\r\n            [height]=\"420\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n            (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\"\r\n            [navigable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand type=\"button\">Add new</button>\r\n  </ng-template>\r\n   <kendo-grid-column field=\"genreID\" title=\"Genre\" width=\"70\">\r\n    <ng-template kendoGridEditTemplate let-dataItem=\"books\">\r\n      <input [(ngModel)]=\"books.genreID\" kendoGridFocusable name=\"genreID\" class=\"k-textbox\" type=\"number\" required />\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"bookName\" title=\"Name\" width=\"120\">\r\n    <ng-template kendoGridEditTemplate let-dataItem=\"books\">\r\n      <input [(ngModel)]=\"books.bookName\" kendoGridFocusable name=\"bookName\" class=\"k-textbox\" required />\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"yearOfPublish\" title=\"Year\">\r\n    <ng-template kendoGridEditTemplate let-dataItem=\"books\">\r\n      <input [(ngModel)]=\"books.yearOfPublish\" kendoGridFocusable name=\"yearOfPublish\" class=\"k-textbox\" type=\"number\" min=\"876\" max=\"2018\" required />\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Action\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n      <!--<button kendoGridEditCommand type=\"button\" [primary]=\"true\">Edit</button>-->\r\n      <button kendoGridRemoveCommand type=\"button\">Remove</button>\r\n      <button kendoGridSaveCommand type=\"button\">\r\n        {{ isNew ? 'Save' : 'Update' }}\r\n      </button>\r\n      <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n\r\n</kendo-grid>\r\n\r\n<br />\r\n\r\n<!--<form novalidate #myForm=\"ngForm\">\r\n  <kendo-grid [data]=\"view | async\"\r\n              [height]=\"533\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              [pageable]=\"true\" [sortable]=\"true\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n              (add)=\"addHandler($event, myForm)\"\r\n              [navigable]=\"true\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand type=\"button\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"bookName\" title=\"Book Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"books\">\r\n        <input [(ngModel)]=\"books.bookName\" kendoGridFocusable name=\"bookName\" class=\"k-textbox\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"genreID\" editor=\"numeric\" title=\"Genre\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"books\">\r\n        <input [(ngModel)]=\"books.genreID\" kendoGridFocusable name=\"genreID\" class=\"k-textbox\" type=\"number\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"yearOfPublish\" editor=\"numeric\" title=\"Year Of Publish\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"books\">\r\n        <input [(ngModel)]=\"books.yearOfPublish\"\r\n               kendoGridFocusable\r\n               name=\"yearOfPublish\"\r\n               required\r\n               min=\"876\"\r\n               max=\"2018\"\r\n               class=\"k-textbox\"\r\n               type=\"number\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\"\r\n                [disabled]=\"myForm.invalid || myForm.pristine\">\r\n          {{ isNew ? 'Add' : 'Update' }}\r\n        </button>\r\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>-->\r\n"

/***/ }),

/***/ "./src/app/book/book-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/book/book-list.component.ts ***!
  \*********************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_bookService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.bookService */ "./src/app/book/data.bookService.ts");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book */ "./src/app/book/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(dataService) {
        this.dataService = dataService;
        this.books = [];
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BookListComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(state);
        this.load();
    };
    BookListComponent.prototype.load = function () {
        var _this = this;
        this.dataService.getBooks().subscribe(function (data) {
            _this.books = data;
        });
        console.log("Startup entity must be here");
    };
    BookListComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        //formInstance.reset();
        //this.closeEditor(sender);
        sender.addRow(new _book__WEBPACK_IMPORTED_MODULE_2__["Book"]());
    };
    BookListComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        // update the data source
        console.log(JSON.stringify(dataItem) + " from component");
        this.dataService.save(dataItem, isNew);
        // close the editor, that is, revert the row back into view mode
        sender.closeRow(rowIndex);
    };
    BookListComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.dataService.deleteBook(dataItem.bookID);
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book/book-list.component.html")
        }),
        __metadata("design:paramtypes", [_data_bookService__WEBPACK_IMPORTED_MODULE_1__["DataBookService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/book.ts":
/*!******************************!*\
  !*** ./src/app/book/book.ts ***!
  \******************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/book/data.bookService.ts":
/*!******************************************!*\
  !*** ./src/app/book/data.bookService.ts ***!
  \******************************************/
/*! exports provided: DataBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBookService", function() { return DataBookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataBookService = /** @class */ (function (_super) {
    __extends(DataBookService, _super);
    function DataBookService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = 'http://localhost:49403/api/Book';
        _this.data = [];
        return _this;
        //  const combined = Observable.combineLatest(
        //    this.deleteBook(id);
        //    this.getBooks();
        //);
    }
    DataBookService.prototype.getBooks = function () {
        var result = this.http.get(this.url + '/getAll');
        console.log("here must be information from backend");
        return result;
    };
    DataBookService.prototype.getBook = function (id) {
        return this.http.get(this.url + '/get' + id);
    };
    DataBookService.prototype.createBook = function (book) {
        console.log(JSON.stringify(book));
        return this.http.get(this.url + "/create", book);
    };
    DataBookService.prototype.updateBook = function (book) {
        return this.http.put(this.url + '/' + book.bookID, book);
    };
    DataBookService.prototype.deleteBook = function (id) {
        //var delete =  this.http.get(this.url + '/delete/' + id).toPromise();
        console.log(this.url + '/delete/' + id);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].forkJoin(this.http.get(this.url + '/delete/' + id).toPromise(), this.http.get(this.url + '/getAll'));
    };
    DataBookService.prototype.save = function (data, isNew) {
        //const action = isNew ? this.createBook(data) : this.updateBook(data);
        if (isNew) {
            this.createBook(data);
            console.log(data + " " + isNew);
            console.log("created");
        }
        if (!isNew) {
            this.updateBook(data);
            console.log("updated");
        }
        this.reset();
    };
    DataBookService.prototype.reset = function () {
        this.data = [];
    };
    DataBookService.prototype.resetItem = function (data) {
        if (!data) {
            return;
        }
        if (function (item) { return item.bookID === data.bookID; }) {
            // find orignal data item
            var originalDataItem = this.getBook(data.bookID);
            // revert changes
            Object.assign(originalDataItem, data);
        }
        _super.prototype.next.call(this, this.data);
    };
    DataBookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataBookService);
    return DataBookService;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));



/***/ }),

/***/ "./src/app/book/not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/book/not-found.component.ts ***!
  \*********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Not Found</h2>'
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 20%;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 6px 6px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n  }\r\n\r\n.sidenav a:hover {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n    .sidenav a {\r\n      font-size: 18px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/']\">WebApplication1</a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/']\">\r\n            <span class='glyphicon glyphicon-home'></span> Home\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/edit/:id']\">\r\n            <span class='glyphicon glyphicon-education'></span> Edit\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/create']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Create\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<div class=\"sidenav\">\r\n  <h1><a [routerLink]=\"['/']\">WebLibrary</a></h1>\r\n  <a href=\"#\">Authors list</a>\r\n  <a href=\"#\">Library contacts</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anuitex-64\source\repos\WebLibraryCore\WEbLibraryCore.UIx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map