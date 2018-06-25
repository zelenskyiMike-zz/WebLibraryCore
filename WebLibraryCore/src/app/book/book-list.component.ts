import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';


@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];
  public book: Book;
  public selectedBook: Book = null;
  public isNewRecord: boolean = false;
  public statusMessage: string;

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;


  constructor(private dataService: DataBookService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook() {
    this.selectedBook = new Book(0, 0, null, 0);
    this.books.push(this.selectedBook);
    this.isNewRecord = true;
  }

  editBook(book: Book) {
    this.selectedBook = book;
  }

  loadTemplate(book: Book) {
    if (this.selectedBook && this.selectedBook.bookID == book.bookID) {
      return this.editTemplate;
    }
    if (!this.selectedBook && this.selectedBook.bookID != book.bookID) {
      return this.readOnlyTemplate;
    }
  }

  //saveBook() {

  //}
}
