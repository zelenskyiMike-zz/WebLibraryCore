import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list.component';
import { BookCreateComponent } from './book/book-create.component';
import { BookEditComponent } from './book/book-edit.component';
import { NotFoundComponent } from './book/not-found.component';
import { AppComponent } from './app.component';
import { DataBookService } from './book/data.bookService';

const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: '*', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
