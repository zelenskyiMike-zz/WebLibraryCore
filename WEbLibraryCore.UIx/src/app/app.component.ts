import { Component, OnInit } from '@angular/core';
import { Http, XHRBackend } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: Http) { }

  //title = 'Hello World!';
  //onButtonClick() {
  //  this._httpService.get('http://localhost:55511/api/Book');
  //}
}
