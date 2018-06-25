import { Component, OnInit } from '@angular/core';
import { Http, XHRBackend } from '@angular/http'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: Http) { }

  //title = 'Hello World!';
  //onButtonClick() {
  //  this.title = 'Hello from Kendo UI!';
  //}
  }
