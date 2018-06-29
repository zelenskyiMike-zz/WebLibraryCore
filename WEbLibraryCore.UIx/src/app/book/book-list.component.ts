import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';
import { State, process } from '@progress/kendo-data-query';
import { state } from '@angular/animations';


@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  private editedRowIndex: number;
  private book: Book;

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private dataService: DataBookService) { }

  ngOnInit() {
    this.load();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log(state);
    this.load();
  }

  load() {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
    console.log("Startup entity must be here");

  }

  addHandler({ sender }) {
    //formInstance.reset();
    //this.closeEditor(sender);
    sender.addRow(new Book())
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    // update the data source
    console.log(JSON.stringify(dataItem) + " from component");
    this.dataService.save(dataItem, isNew);

    // close the editor, that is, revert the row back into view mode
    sender.closeRow(rowIndex);
  }

  removeHandler({ dataItem }) {
    this.dataService.deleteBook(dataItem.bookID);
  }

  //public saveHandler({ sender, rowIndex, dataItem, isNew }) {
  //  this.dataService.save(dataItem, isNew);

  //  sender.closeRow(rowIndex);

  //  this.editedRowIndex = undefined;
  //  this.book = undefined;
  //}
}
