import { Component, Input } from '@angular/core';
import { book } from './book';
import { DataBookService } from './data.bookService';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent {

  public books$: Observable<book[]>;
  //public book : book;

  constructor(private dataService: DataBookService) {
   // this.book = new book();
  }
  
  ngOnInit() {
    //this.dataService.getBooks().subscribe((tempdate) => {
    //  this.book; /////////////////
    //}), err => {
    //  console.log(err);
    //}

    this.books$ = this.dataService.getBooks(); 
  }
}
