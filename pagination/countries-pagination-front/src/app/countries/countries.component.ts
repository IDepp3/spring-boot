import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  private page: number = 0;
  private size: number = 10;
  private order: string = 'id';
  private asc: boolean = true;

  private countries: any[] = [];

  private isFirst: boolean = false;
  private isLast: boolean = false;

  private totalPages: number[] = [];

  constructor( private countriesService: CountriesService) { 
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countriesService.countries(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.countries = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  getCountries():any[] {
    return this.countries;
  }

  getTotalPages():number[] {
    return this.totalPages;
  }

  sort(): void {
    this.asc = !this.asc;
    this.loadCountries();
  }

  rewind(): void {
    if(!this.isFirst) {
      this.page--;
      this.loadCountries();
    }
  }

  forward(): void {
    if(!this.isLast) {
      this.page++;
      this.loadCountries();
    }
  }

  setPage(page:number): void {
    this.page = page;
    this.loadCountries();
  }

  setOrder(order:string): void {
    this.order = order;
    this.loadCountries();
  }
}
