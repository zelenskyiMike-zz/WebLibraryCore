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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2>Here is my {{title}}</h2>\r\n  </li>\r\n</ul>\r\n\r\n<app-book></app-book>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'TITLE';
    }
    //apiValues: string[] = [];
    AppComponent.prototype.ngOnInit = function () {
        //    this._httpService.get('/api').subscribe(values => {
        //        this.apiValues = values.json() as string[];
        //});
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var book_component_1 = __webpack_require__("./src/app/book/book.component.ts");
//import { BookListComponent } from './book/book-list.component';
//import { BookCreateComponent } from './book/book-create.component';
//import { BookEditComponent } from './book/book-edit.component';
//import { NotFoundComponent } from './book/not-found.component';
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var data_bookService_1 = __webpack_require__("./src/app/book/data.bookService.ts");
//const appRoutes: Routes = [
//  { path: '', component: BookListComponent },
//  { path: 'create', component: BookCreateComponent },
//  { path: 'edit/:id', component: BookEditComponent },
//  { path: '*', component: NotFoundComponent }
//];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                book_component_1.BookComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
            ],
            providers: [data_bookService_1.DataBookService],
            bootstrap: [app_component_1.AppComponent, book_component_1.BookComponent /*, BookListComponent*/]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label>Название</label>\r\n\r\n\r\n  <!--<input type=\"text\" [(ngModel)]=\"book.BookID\" class=\"form-control col-4\" />\r\n  <p>here is {{ book}}</p>\r\n  <p>here is {{ book.BookID}}</p>-->\r\n\r\n  <ul *ngFor=\"let book of books$ | async\">\r\n    <li>{{e.BookName}}</li>\r\n  </ul>\r\n</div>\r\n<!--<div class=\"form-group\">\r\n  <label>Дата випуска</label>\r\n  <input type=\"text\" [(ngModel)]=\"book.YearOfPublish\" class=\"form-control col-4\" />\r\n</div>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_bookService_1 = __webpack_require__("./src/app/book/data.bookService.ts");
var BookComponent = /** @class */ (function () {
    //public book : book;
    function BookComponent(dataService) {
        this.dataService = dataService;
        // this.book = new book();
    }
    BookComponent.prototype.ngOnInit = function () {
        //this.dataService.getBooks().subscribe((tempdate) => {
        //  this.book; /////////////////
        //}), err => {
        //  console.log(err);
        //}
        this.books$ = this.dataService.getBooks();
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "./src/app/book/data.bookService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var DataBookService = /** @class */ (function () {
    function DataBookService(http) {
        this.http = http;
        this.url = "/Book";
    }
    DataBookService.prototype.getBooks = function () {
        return this.http.get(this.url).map(function (response) { return response.json().book; }); //.subscribe(
        //res => {
        //  console.log(res);
        //},
        //(err: HttpErrorResponse) => {
        //  console.log(err.error);
        //  console.log(err.name);
        //  console.log(err.message);
        //  console.log(err.status);
        //});
        //this.http.get(this.url).subscribe((data: Response) => {
        //  this.getBooks = data.json();
        //  this.getBooks = Array.of(this.getBooks);
        //})
    };
    DataBookService.prototype.getBook = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    DataBookService.prototype.createBook = function (book) {
        return this.http.post(this.url, book);
    };
    DataBookService.prototype.updateBook = function (book) {
        return this.http.put(this.url + '/' + book.BookID, book);
    };
    DataBookService.prototype.deleteBook = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    DataBookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataBookService);
    return DataBookService;
}());
exports.DataBookService = DataBookService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map