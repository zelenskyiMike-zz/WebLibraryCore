import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';


@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];
  //public book: Book;

  private editedRowIndex: number;
  private book: Book;

  //@ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  //@ViewChild('editTemplate') editTemplate: TemplateRef<any>;


  constructor(private dataService: DataBookService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addHandler({ sender }/*, formInstance*/) {
    //formInstance.reset();
    this.closeEditor(sender);
    sender.addRow(new Book())
  }

  removeHandler({ dataItem }) {
    console.log("remove presed " + dataItem.bookID +1);

    this.dataService.deleteBook(dataItem.bookID);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.dataService.resetItem(this.book);
    this.editedRowIndex = undefined;
    this.book = undefined;
  }

  //public saveHandler({ sender, rowIndex, dataItem, isNew }) {
  //  this.dataService.save(dataItem, isNew);

  //  sender.closeRow(rowIndex);

  //  this.editedRowIndex = undefined;
  //  this.book = undefined;
  //}
}
