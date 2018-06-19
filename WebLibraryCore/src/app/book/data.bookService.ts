import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { book } from './book';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataBookService {
  private url = "/Book";

  constructor(private http: HttpClient) { }

  getBooks() {

    return this.http.get(this.url).map((response: Response) => response.json().book);//.subscribe(
      //res => {
      //  console.log(res);
      //},
      //(err: HttpErrorResponse) => {
      //  console.log(err.error);
      //  console.log(err.name);
      //  console.log(err.message);
      //  console.log(err.status);
      //});

    //this.http.get(this.url).subscribe((data: Response) => {
    //  this.getBooks = data.json();
    //  this.getBooks = Array.of(this.getBooks);
    //})
  }
  getBook(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  createBook(book: book) {
    return this.http.post(this.url, book);
  }
  updateBook(book: book) {
    return this.http.put(this.url + '/' + book.BookID, book);
  }
  deleteBook(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
