import { Component, OnInit, Input } from '@angular/core';
import { DataBookService } from './data.bookService';
import { book } from './book';

@Component({
  //selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  books: any;
  constructor(private dataService: DataBookService) { }
  @Input() book: Array<any>;

  ngOnInit() {
    this.load();
  }
  load() {
    this.dataService.getBooks().subscribe((data: book) => this.books = data);
  }
  delete(id: number) {
    this.dataService.deleteBook(id).subscribe(data => this.load());
  }
}
