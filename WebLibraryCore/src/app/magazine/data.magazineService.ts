import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Magazine } from './magazine';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataMagazineService {
  private url = "api/Magazine";

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };

  getMagazines() {

    return this.http.get(this.url, this.options)/*.map((response: Response) => response.json())*/;
  }
  getMagazine(id: number) {
    return this.http.get(this.url + '/' + id);
  }
  createMagazine(magazine: Magazine) {
    return this.http.post(this.url, magazine);
  }
  updateMagazine(magazine: Magazine) {
    return this.http.put(this.url + '/' + magazine.MagazineID, magazine);
  }
  deleteMagazine(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
