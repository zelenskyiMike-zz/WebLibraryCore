import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';


@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  private editedRowIndex: number;
  private book: Book;

  constructor(private dataService: DataBookService) { }

  ngOnInit() {
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
    this.closeEditor(sender);
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
