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
        this._httpService.get('/api').subscribe(values => {
            this.apiValues = values.json() as string[];
      });
      console.warn(XHRBackend.toString());
  }

}
