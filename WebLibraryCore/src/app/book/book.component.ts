import { Component,Input } from '@angular/core';
import { Book } from './book';

@Component({
selector : 'book-form',
templateUrl : './book.component.html'
})

export class BookComponent{
    @Input() book:Book;
}
