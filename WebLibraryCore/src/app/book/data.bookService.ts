import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class DataBookService extends BehaviorSubject<any[]> {
  private url = 'http://localhost:51868/api/Book';

  private data: any[] = [];

  constructor(private http: HttpClient) {
    super([]);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
  getBook<Book>(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  createBook(book: Book) {
    return this.http.post(this.url, book);
  }
  updateBook(book: Book) {
    return this.http.put(this.url + '/' + book.bookID, book);
  }
  deleteBook(id: number) {
    //this.resetItem(this.getBook(id));
    console.log(id + 1 + " from service");
    console.log(this.url + '/' + id + " from service");

    return this.http.delete(this.url + '/' + id);
  }

  private reset() {
    this.data = [11,'b',1111];
  }

  public resetItem(data: any) {
    if (!data) { return; }

    if (item => item.bookID === data.bookID) {
      // find orignal data item
      const originalDataItem = this.getBook(data.bookID);
      Object.assign(originalDataItem, data);

    }
    // revert changes

    super.next(this.data);
  }
}
