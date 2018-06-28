import { Component, Input } from '@angular/core';
import { Book } from './book';
import { DataBookService } from './data.bookService';
import { Observable } from "rxjs/Rx";
import { Response } from '@angular/http';
import { HttpHeaders } from "@angular/common/http";



@Component({
  selector: 'app-book',
  templateUrl: './book-delete.component.html'
})

export class BookDeleteComponent {

  constructor(private dataService: DataBookService) { }


}

