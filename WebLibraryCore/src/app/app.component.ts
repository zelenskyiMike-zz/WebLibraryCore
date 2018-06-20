import { Component, OnInit } from '@angular/core';
import { Http, XHRBackend } from '@angular/http'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TITLE';
  constructor(private _httpService: Http) { }

    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/Book').subscribe(values => {
            this.apiValues = values.json() as string[];
      });
      //this._httpService.get('/api/Article').subscribe(values => {
      //  this.apiValues = values.json() as string[];
      //});
      //this._httpService.get('/api/Magazine/1').subscribe(values => {
      //  this.apiValues = values.json() as string[];
      //});
  }

}
