import { Component, OnInit, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DataBookService } from './data.bookService';
import { Book } from './book';
import { State, process } from '@progress/kendo-data-query';
import { state } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GridComponent } from '@progress/kendo-angular-grid';
import { send } from 'q';


@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];

  private editedRowIndex: number;
  private book: Book;
  private isNew: false;
  @ViewChild(GridComponent) private grid: GridComponent;
  public formGroup: FormGroup;
  public get isInEditingMode(): boolean {
    return this.editedRowIndex !== undefined || this.isNew;
  }

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
    this.load();
  }

  load() {
    this.dataService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addHandler({ sender, dataItem }) {
    sender.addRow(new Book(0, null, '', null))
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    debugger;
    if (isNew) {
      
      this.dataService.createBook(dataItem);
      sender.closeRow(rowIndex);

    }
    if (!isNew) {
      console.log(JSON.stringify(dataItem) + " from component");
      this.dataService.updateBook(this.formGroup.value);
        
      // close the editor, that is, revert the row back into view mode
      sender.closeRow(rowIndex);
      //sender.collapseRow(rowIndex);
    }

    this.ngOnInit();
  }

  editHandler({ sender, dataItem, rowIndex, colIndex }) {
    ///*new Book(dataItem.bookID, dataItem.genreID, dataItem.bookName, dataItem.yearOfPublish)*/
    //console.log(JSON.stringify(dataItem) + " from HANDLER");
    //sender.addRow(rowIndex, dataItem/*, this.formGroup.value*//*  .get(dataItem)*/);

    if (this.formGroup && !this.formGroup.valid) {
      return;
    }

    //this.saveRow();
    this.formGroup = this.formBuilder.group(dataItem);
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.formGroup);
   
    debugger;

  }

  removeHandler({ dataItem }) {
    debugger;
    this.dataService.deleteBook(dataItem.bookID);
  }

  public createFormGroup(args: any): FormGroup {
    const item = args.isNew ? new Book(0,null,'',null) : args.dataItem;
    this.formGroup = this.formBuilder.group({
      'bookID': [item.bookID, Validators.maxLength],
      'bookName': [item.bookName, Validators.required],
      'genreID': item.genreID,
      'yearOfPublish': [item.yearOfPublish, Validators.compose([Validators.required, Validators.min(864), Validators.max(2018)])]
    });

    return this.formGroup;
  }

  private saveRow(): void {
    if (this.isInEditingMode) {
      this.saveHandler(this.formGroup.value);
    }

    this.closeEditor(this.grid);
  }
  private closeEditor(grid: GridComponent, rowIndex: number = this.editedRowIndex): void {
    this.isNew = false;
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
