import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//import { BookComponent } from './book/book.component';

import { BookListComponent } from './book/book-list.component';
import { BookCreateComponent } from './book/book-create.component';
import { BookEditComponent } from './book/book-edit.component';
import { BookDeleteComponent } from './book/book-delete.component';
import { NotFoundComponent } from './book/not-found.component';
import { DataBookService } from './book/data.bookService';

import { NavMenuComponent } from './nav-menu/nav-menu.component';

//import { MagazineComponent } from './magazine/magazine.component';
//import { DataMagazineService } from './magazine/data.magazineService';


const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: 'delete/:id', component: BookDeleteComponent },
  { path: '*', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookDeleteComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    NotFoundComponent,
    NavMenuComponent
    //MagazineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent, DataBookService, BookDeleteComponent, BookListComponent, BookCreateComponent, BookEditComponent,  NavMenuComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
