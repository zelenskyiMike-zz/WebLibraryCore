import { Component, Input } from '@angular/core';
import { book } from './book';
import { DataBookService } from './data.bookService';
import { Observable } from "rxjs/Rx";
import { HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent {

 // public books$: Observable<Object[]>;
  public book : book;

  constructor(private dataService: DataBookService) { 
    this.book = new book();
  }

  ngOnInit() {
    this.dataService.getBooks().subscribe(book => this.book = book);
   // console.log(this.dataService.getBooks().subscribe(book => this.book = book));

  }
  
    //books$ = this.dataService.getBooks(); 
  }

