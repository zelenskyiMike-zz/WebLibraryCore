import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataBookService {
  private url = 'http://localhost:51868/api/Book';

  constructor(private http: HttpClient) { }

  getBooks<Book>() {
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
  getBook<Book>(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  createBook(book: Book) {
    return this.http.post(this.url, book);
  }
  updateBook(book: Book) {
    return this.http.put(this.url + '/' + book.BookID, book);
  }
  deleteBook(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
