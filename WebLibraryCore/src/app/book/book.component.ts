import { Component, Input } from '@angular/core';
import { Book } from './book';
import { DataBookService } from './data.bookService';
import { Observable } from "rxjs/Rx";
import { HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent {
  public book: Book[];

  constructor(private dataService: DataBookService) {
    this.book = new Array <Book>();
  }

  ngOnInit() {
    this.dataService.getBooks().subscribe((data : Book[]) => {
      this.book = data;
    });
    console.log(this.dataService.getBooks().subscribe((data: Book[]) => {
      this.book = data;
    }));
  }
}

