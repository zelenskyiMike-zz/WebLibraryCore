import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class DataBookService extends BehaviorSubject<any[]> {
  private url = 'http://localhost:49403/api/Book';

  private data: any[] = [];

  constructor(private http: HttpClient) {
    super([]);
  }

  getBooks(): Observable<Book[]> {
    var result = this.http.get<Book[]>(this.url + '/getAll')

    console.log("here must be information from backend");

    return result;
  }
  getBook<Book>(id: number) {
    return this.http.get(this.url + '/get' + id);
  }
  createBook<Book>(book: Book): Observable<Book> {
    console.log(JSON.stringify(book));
    return this.http.get<Book>(this.url, book);
  }

  updateBook(book: Book) {
    return this.http.put(this.url + '/' + book.bookID, book);
  }
  deleteBook(id: number) {
    console.log(this.url + '/delete/' + id);
    return this.http.get(this.url + '/delete/' + id).toPromise();
  }

  public save(data: Book, isNew?: boolean) {
    //const action = isNew ? this.createBook(data) : this.updateBook(data);

    if (isNew) {
      this.createBook(data);
      console.log(data + " " + isNew);
      console.log("created");
    }
    if (!isNew) {
      this.updateBook(data);
      console.log("updated");
    }
    this.reset();

   
  }


  private reset() {
    this.data = [11, 'b', 1111];
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
