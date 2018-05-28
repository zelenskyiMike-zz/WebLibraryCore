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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<book-form></book-form>\n\n"

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
        this.apiValues = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/api/values').subscribe(function (values) {
            _this.apiValues = values.json();
        });
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var book_component_1 = __webpack_require__("./src/app/book/book.component.ts");
var book_list_component_1 = __webpack_require__("./src/app/book/book-list.component.ts");
var book_create_component_1 = __webpack_require__("./src/app/book/book-create.component.ts");
var book_edit_component_1 = __webpack_require__("./src/app/book/book-edit.component.ts");
var not_found_component_1 = __webpack_require__("./src/app/book/not-found.component.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var data_bookService_1 = __webpack_require__("./src/app/book/data.bookService.ts");
var appRoutes = [
    { path: '', component: book_list_component_1.BookListComponent },
    { path: 'create', component: book_create_component_1.BookCreateComponent },
    { path: 'edit/:id', component: book_edit_component_1.BookEditComponent },
    { path: '*', component: not_found_component_1.NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                book_component_1.BookComponent,
                book_list_component_1.BookListComponent,
                book_create_component_1.BookCreateComponent,
                book_edit_component_1.BookEditComponent,
                not_found_component_1.NotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [data_bookService_1.DataBookService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/book/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Добавление новой книги</h2>\r\n    <book-form [(book)]=\"book\"></book-form>\r\n    <div class=\"form-group\">\r\n        <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <a routerLink=\"/\" class=\"btn btn-warning\">Отмена</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/book/book-create.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_bookService_1 = __webpack_require__("./src/app/book/data.bookService.ts");
var book_1 = __webpack_require__("./src/app/book/book.ts");
var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.book = new book_1.Book(); // добавляемый объект
    }
    BookCreateComponent.prototype.save = function () {
        var _this = this;
        this.bookService.createBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    BookCreateComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/book/book-create.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService, router_1.Router])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
exports.BookCreateComponent = BookCreateComponent;


/***/ }),

/***/ "./src/app/book/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <h2>Изменение данных о книге</h2>\r\n  <book-form [(book)]=\"book\"></book-form>\r\n  <div class=\"form-group\">\r\n    <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n  </div>\r\n</div>\r\n<a routerLink=\"/\" class=\"nav-link\">Назад к списку</a>\r\n"

/***/ }),

/***/ "./src/app/book/book-edit.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_bookService_1 = __webpack_require__("./src/app/book/data.bookService.ts");
var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(bookService, router, activeRoute) {
        this.bookService = bookService;
        this.router = router;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id) {
            this.bookService.getBook(this.id).subscribe(function (data) {
                _this.book = data;
                if (_this.book == null) {
                    _this.loaded = true;
                }
            });
        }
    };
    BookEditComponent.prototype.save = function () {
        var _this = this;
        this.bookService.updateBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
    };
    BookEditComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/book/book-edit.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService, router_1.Router, router_1.ActivatedRoute])
    ], BookEditComponent);
    return BookEditComponent;
}());
exports.BookEditComponent = BookEditComponent;


/***/ }),

/***/ "./src/app/book/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a routerLink=\"/create\" class=\"nav-link\">Добавить</a>\r\n</div>\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <td>Название</td>\r\n      <td>Год выпуска</td>\r\n      <td></td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let book of boooks\">\r\n      <td>{{book?.bookName}}</td>\r\n      <td>{{book?.yearOfPublish}}</td>\r\n      <td>\r\n        <a [routerLink]=\"['edit', book.bookID]\" class=\"btn btn-sm btn-primary\">Изменить</a>\r\n        <button (click)=\"delete(book.bookID)\" class=\"btn btn-sm btn-danger\">Удалить</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/book/book-list.component.ts":
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
var BookListComponent = /** @class */ (function () {
    function BookListComponent(dataService) {
        this.dataService = dataService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BookListComponent.prototype.load = function () {
        var _this = this;
        this.dataService.getBooks().subscribe(function (data) { return _this.books = data; });
    };
    BookListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dataService.deleteBook(id).subscribe(function (data) { return _this.load(); });
    };
    BookListComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/book/book-list.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;


/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<book-form>\r\n  <div class=\"form-group\">\r\n    <label>Название</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.bookName\" class=\"form-control\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Дата випуска</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.yearOfPublish\" class=\"form-control\" />\r\n  </div>\r\n</book-form>\r\n"

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
var book_1 = __webpack_require__("./src/app/book/book.ts");
var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", book_1.Book)
    ], BookComponent.prototype, "book", void 0);
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book-form',
            template: __webpack_require__("./src/app/book/book.component.html")
        })
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "./src/app/book/book.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(bookID, bookName, genreID, yearOfPublish) {
        this.bookID = bookID;
        this.bookName = bookName;
        this.genreID = genreID;
        this.yearOfPublish = yearOfPublish;
    }
    return Book;
}());
exports.Book = Book;


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
var DataBookService = /** @class */ (function () {
    function DataBookService(http) {
        this.http = http;
        this.url = "/api/Book";
    }
    DataBookService.prototype.getBooks = function () {
        return this.http.get(this.url);
    };
    DataBookService.prototype.getBook = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    DataBookService.prototype.createBook = function (book) {
        return this.http.post(this.url, book);
    };
    DataBookService.prototype.updateBook = function (book) {
        return this.http.put(this.url + '/' + book.bookID, book);
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

/***/ "./src/app/book/not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        core_1.Component({
            template: '<h2>Not Found</h2>'
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


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