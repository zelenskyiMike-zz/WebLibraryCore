import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class DataBookService extends BehaviorSubject<any[]> {
  behaviorSubject: any;
  private url = 'http://localhost:49403/api/Book';

  private data: any[] = [];

  public behavorSubject : any = new BehaviorSubject(this.data);

  constructor(private http: HttpClient) {
    super([]);
  }

  getBooks(): Observable<Book[]> {
    let result = this.http.get<Book[]>(this.url + '/getAll');

    return result;
  }
  getBook<Book>(id: number) {
    let result = this.http.get(this.url + '/get' + id);

    return result;
  }
  createBook<Book>(book: Book): Observable<Book> {
    debugger;
    let result = this.http.post<Book>(this.url + "/create", book)/*.toPromise()*/;
    //this.getBooks();
    return result;
  }
    
  updateBook(book: Book) {
    let result = this.http.put(this.url + '/edit'/* + book.bookID*/, book);

    return result;
  }
  deleteBook(id: number) {
    let result = this.http.get(this.url + '/delete/' + id).toPromise();

    return result;
  }

  private reset() {
    this.data = [];
  }

  public resetItem(data: any) {
    if (!data) { return; }

    if (item => item.bookID === data.bookID) {
      // find orignal data item
      const originalDataItem = this.getBook(data.bookID);
      // revert changes

      Object.assign(originalDataItem, data);

    }

    super.next(this.data);
  }
}
