import { Component, Input } from '@angular/core';
import { Magazine } from './magazine';
import { DataMagazineService } from './data.magazineService';
import { Observable } from "rxjs/Rx";
import { HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html'
})

export class MagazineComponent {

  //public magazine: Observable<Magazine[]>;
  public magazine: Magazine;

  constructor(private dataService: DataMagazineService) {
    this.magazine = new Magazine();
  }

  ngOnInit() {
    this.dataService.getMagazine(1).subscribe(magazine => this.magazine = magazine);
    console.log(this.dataService.getMagazine(1).subscribe(magazine => this.magazine = magazine))
  }

  //this.books$ = this.dataService.getBooks(); 
}

