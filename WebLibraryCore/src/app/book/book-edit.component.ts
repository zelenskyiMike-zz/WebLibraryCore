import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataBookService } from './data.bookService';
import { Book } from './book';

@Component({
  templateUrl: './book-edit.component.html'
})

export class BookEditComponent implements OnInit {
  id: number;
  book: Book;
  loaded: boolean = false;

  constructor(private bookService: DataBookService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
  }
  ngOnInit(): void {
    if (this.id) {
      this.bookService.getBook(this.id).subscribe((data: Book) => {
        this.book = data;
        if (this.book == null) {
          this.loaded = true
        }
      });
    }
  }
  save() {
    this.bookService.updateBook(this.book).subscribe(data => this.router.navigateByUrl("/"));
  }
}
