import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBookService } from './data.bookService';
import { Book } from './book';
 
@Component({
    templateUrl: './book-create.component.html'
})
export class BookCreateComponent {
 
    book: Book = new Book();    // добавляемый объект
  constructor(private bookService: DataBookService, private router: Router) { }
    save() {
        this.bookService.createBook(this.book).subscribe(data => this.router.navigateByUrl("/"));
    }
}
