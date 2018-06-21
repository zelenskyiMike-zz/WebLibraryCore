import { Component, OnInit, Input } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';

@Component({
  selector: 'app-books-list',
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
    this.dataService.getBooks();
  }
  delete(id: number) {
    this.dataService.deleteBook(id).subscribe(data => this.load());
  }
}
