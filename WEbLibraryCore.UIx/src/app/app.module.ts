import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';

//BOOK
import { BookListComponent } from './book/book-list.component';
import { BookCreateComponent } from './book/book-create.component';
import { BookEditComponent } from './book/book-edit.component';
import { BookDeleteComponent } from './book/book-delete.component';
import { NotFoundComponent } from './book/not-found.component';
import { DataBookService } from './book/data.bookService';

//KENDO UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

//ANGULAR ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent, DataBookService, BookDeleteComponent, BookListComponent, BookCreateComponent, BookEditComponent, NavMenuComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
