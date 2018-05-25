import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Book } from './book';

@Injectable()
export class DataBookService{
    private url = "/api/book";

constructor(private http: HttpClient) {}

getBooks(){
    return this.http.get(this.url);
}
getBook(id: number) {
    return this.http.get(this.url + '/' + id);
}
createBook(book : Book){
    return this.http.post(this.url,book);
}
updateBook(book : Book){
    return this.http.put(this.url+'/'+book.bookID,book);
}
deleteBook(id:number){
return this.http.delete(this.url+'/'+id);
}
}
