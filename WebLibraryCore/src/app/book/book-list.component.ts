import { Component, OnInit, Input } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';

@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  constructor(private dataService: DataBookService) { }
  
  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
}
