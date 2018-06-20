import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
//import { MagazineComponent } from './magazine/magazine.component';
import { AppComponent } from './app.component';
import { DataBookService } from './book/data.bookService';
//import { DataMagazineService } from './magazine/data.magazineService';


//const appRoutes: Routes = [
//  { path: '', component: BookListComponent },
//  { path: 'create', component: BookCreateComponent },
//  { path: 'edit/:id', component: BookEditComponent },
//  { path: '*', component: NotFoundComponent }
//];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    //MagazineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [DataBookService/*, DataMagazineService*/],
  bootstrap: [AppComponent, BookComponent/*, MagazineComponent*/]
})
export class AppModule { }
