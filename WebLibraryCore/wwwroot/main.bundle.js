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

module.exports = "body{\r\n  background-color: antiquewhite;\r\n}\r\n.content-main{\r\n  margin-left : 21%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <nav-menu></nav-menu>\r\n</div>\r\n\r\n<div class=\"container content-main\">\r\n\r\n  <button kendoButton  [routerLink]=\"['/']\" [primary]=\"true\">My Kendo UI Button</button>\r\n\r\n  <!--SIMPLE ANALOG OF TOOLBAR-->\r\n\r\n  <!--<button kendoButton  [routerLink]=\"['/edit/:{id}']\" [primary]=\"true\">My Kendo UI Button</button>\r\n\r\n  <button kendoButton (click)=\"onButtonClick()\" [primary]=\"true\">My Kendo UI Button</button>-->\r\n\r\n  <br />\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

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
    }
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_menu_component_1 = __webpack_require__("./src/app/nav-menu/nav-menu.component.ts");
//BOOK
var book_list_component_1 = __webpack_require__("./src/app/book/book-list.component.ts");
var book_create_component_1 = __webpack_require__("./src/app/book/book-create.component.ts");
var book_edit_component_1 = __webpack_require__("./src/app/book/book-edit.component.ts");
var book_delete_component_1 = __webpack_require__("./src/app/book/book-delete.component.ts");
var not_found_component_1 = __webpack_require__("./src/app/book/not-found.component.ts");
var data_bookService_1 = __webpack_require__("./src/app/book/data.bookService.ts");
//KENDO UI
var kendo_angular_buttons_1 = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
var kendo_angular_grid_1 = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
//ANGULAR ANIMATIONS
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
//import { MagazineComponent } from './magazine/magazine.component';
//import { DataMagazineService } from './magazine/data.magazineService';
var appRoutes = [
    { path: '', component: book_list_component_1.BookListComponent },
    { path: 'create', component: book_create_component_1.BookCreateComponent },
    { path: 'edit/:id', component: book_edit_component_1.BookEditComponent },
    { path: 'delete/:id', component: book_delete_component_1.BookDeleteComponent },
    { path: '*', component: not_found_component_1.NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                book_delete_component_1.BookDeleteComponent,
                book_list_component_1.BookListComponent,
                book_create_component_1.BookCreateComponent,
                book_edit_component_1.BookEditComponent,
                not_found_component_1.NotFoundComponent,
                nav_menu_component_1.NavMenuComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_grid_1.GridModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [app_component_1.AppComponent, data_bookService_1.DataBookService, book_delete_component_1.BookDeleteComponent, book_list_component_1.BookListComponent, book_create_component_1.BookCreateComponent, book_edit_component_1.BookEditComponent, nav_menu_component_1.NavMenuComponent, not_found_component_1.NotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/book/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Добавление новой книги</h2>\r\n    <!--<book-form [(book)]=\"book\"></book-form>-->\r\n    <div class=\"form-group\">\r\n        <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <a routerLink=\"/\" class=\"btn btn-warning\">Отмена</a>\r\n    </div>\r\n</div>\r\n"

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
        core_1.Component({
            template: __webpack_require__("./src/app/book/book-create.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService, router_1.Router])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
exports.BookCreateComponent = BookCreateComponent;


/***/ }),

/***/ "./src/app/book/book-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label>Название Delete</label>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/book/book-delete.component.ts":
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
var BookDeleteComponent = /** @class */ (function () {
    function BookDeleteComponent(dataService) {
        this.dataService = dataService;
    }
    BookDeleteComponent = __decorate([
        core_1.Component({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book-delete.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService])
    ], BookDeleteComponent);
    return BookDeleteComponent;
}());
exports.BookDeleteComponent = BookDeleteComponent;


/***/ }),

/***/ "./src/app/book/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n  <h2>Изменение данных о книге</h2>\r\n  <div class=\"form-group\">\r\n\r\n    <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n  </div>\r\n</div>\r\n<a routerLink=\"/\" class=\"nav-link\">Назад к списку</a>\r\n\r\n"

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

module.exports = "\r\n<br />\r\n<div class=\"form-group\">\r\n  <label>List of books</label>\r\n</div>\r\n\r\n<kendo-grid [data]=\"books\" [height]=\"410\">\r\n  <kendo-grid-column field=\"bookID\" title=\"ID\" width=\"40\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"bookName\" title=\"Name\" width=\"80\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"yearOfPublish\" title=\"Year\">\r\n  </kendo-grid-column>\r\n  <kendo-grid-column title=\"Action\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      <button kendoButton [routerLink]=\"['/edit/:{1}']\">My Kendo UI Button</button>\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n</kendo-grid>\r\n"

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
var book_1 = __webpack_require__("./src/app/book/book.ts");
var BookListComponent = /** @class */ (function () {
    function BookListComponent(dataService) {
        this.dataService = dataService;
        this.books = [];
        this.selectedBook = null;
        this.isNewRecord = false;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BookListComponent.prototype.load = function () {
        var _this = this;
        this.dataService.getBooks().subscribe(function (data) {
            _this.books = data;
        });
    };
    BookListComponent.prototype.addBook = function () {
        this.selectedBook = new book_1.Book(0, 0, null, 0);
        this.books.push(this.selectedBook);
        this.isNewRecord = true;
    };
    BookListComponent.prototype.editBook = function (book) {
        this.selectedBook = book;
    };
    BookListComponent.prototype.loadTemplate = function (book) {
        if (this.selectedBook && this.selectedBook.bookID == book.bookID) {
            return this.editTemplate;
        }
        if (!this.selectedBook && this.selectedBook.bookID != book.bookID) {
            return this.readOnlyTemplate;
        }
    };
    __decorate([
        core_1.ViewChild('readOnlyTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], BookListComponent.prototype, "readOnlyTemplate", void 0);
    __decorate([
        core_1.ViewChild('editTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], BookListComponent.prototype, "editTemplate", void 0);
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'app-books-list',
            template: __webpack_require__("./src/app/book/book-list.component.html")
        }),
        __metadata("design:paramtypes", [data_bookService_1.DataBookService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;


/***/ }),

/***/ "./src/app/book/book.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(bookID, genreID, bookName, yearOfPublish) {
        this.bookID = bookID;
        this.genreID = genreID;
        this.bookName = bookName;
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
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var DataBookService = /** @class */ (function () {
    function DataBookService(http) {
        this.http = http;
        this.url = 'http://localhost:51868/api/Book';
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

/***/ "./src/app/nav-menu/nav-menu.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 20%;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 6px 6px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n  }\r\n\r\n.sidenav a:hover {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n    .sidenav a {\r\n      font-size: 18px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/']\">WebApplication1</a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/']\">\r\n            <span class='glyphicon glyphicon-home'></span> Home\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/edit/:id']\">\r\n            <span class='glyphicon glyphicon-education'></span> Edit\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/create']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Create\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<div class=\"sidenav\">\r\n  <h1><a [routerLink]=\"['/']\">WebLibrary</a></h1>\r\n  <a href=\"#\">Authors list</a>\r\n  <a href=\"#\">Library contacts</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
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
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            template: __webpack_require__("./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("./src/app/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;


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