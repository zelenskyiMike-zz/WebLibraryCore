import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';
import { State, process } from '@progress/kendo-data-query';
import { state } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  private editedRowIndex: number;
  private book: Book;

  public formGroup: FormGroup;

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };



  constructor(private dataService: DataBookService, private formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

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

  addHandler({ sender, dataItem }) {
    //formInstance.reset();
    //this.closeEditor(sender);
    sender.addRow(new Book())
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    debugger;
    // update the data source
    if (isNew) {
      console.log(JSON.stringify(dataItem) + " from component");

      this.dataService.save(dataItem, isNew);

      // close the editor, that is, revert the row back into view mode
      sender.closeRow(rowIndex);
    }
    if (!isNew) {
      console.log(JSON.stringify(dataItem) + " from component");
      this.dataService.updateBook(dataItem);
        
      // close the editor, that is, revert the row back into view mode
      sender.closeRow(rowIndex);
    }

  }

  removeHandler({ dataItem }) {
    this.dataService.deleteBook(dataItem.bookID);
  }

  public createFormGroup(args: any): /*Book*/ any {
    const item = args.isNew ? new Book() : args.dataItem;
    debugger;
    this.formGroup = this.formBuilder.group({
      //'BookID': item.bookID,
      'bookName': [item.bookName, Validators.required],
      'genreID': item.genreID,
      'yearOfPublish': [item.yearOfPublish, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])]
    });

    return this.formGroup;
  }

  editHandler({ dataItem }) {
    console.log(JSON.stringify(dataItem) + " from HANDLER");
    this.dataService.updateBook(dataItem);
  }
}
