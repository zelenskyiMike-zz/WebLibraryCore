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
    debugger;

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
    sender.addRow()
    debugger;
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    // update the data source
    if (isNew) {
      //console.log(JSON.stringify(dataItem) + " from component");
      debugger;
      //this.formGroup.patchValue({ bookName: 'ada', genreID: 1, yearOfPublish: 1234 });
      //dataItem = this.formGroup.value;
      //console.log(JSON.stringify(this.formGroup.value) + " from component");
      let data = this.createFormGroup(dataItem);
      this.dataService.createBook(data);
      debugger;
      // close the editor, that is, revert the row back into view mode
      sender.saveRow();
      //sender.closeRow(rowIndex);
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

  public createFormGroup(args: any) {
    const item = args.isNew ? new Book(null,null,'',null) : args.dataItem;
    debugger;
    this.formGroup = this.formBuilder.group({ 
      'bookID': item.bookID,
      'bookName': [item.bookName, Validators.required],
      'genreID': item.genreID,
      'yearOfPublish': [item.yearOfPublish, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])]
    });
    debugger;
    return this.formGroup;
  }


  editHandler({ dataItem }) {
    console.log(JSON.stringify(dataItem) + " from HANDLER");
    this.createFormGroup(dataItem);
    debugger;
    //this.dataService.updateBook(dataItem);
  }
}
