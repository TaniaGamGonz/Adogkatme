import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private countriesService: CountriesService

  ) { }
   private optionAdopcion: Array<Object>;
   private cities: Array<Object>;
  ngOnInit() {
    this.cities = this.countriesService.getCities();
    this.optionAdopcion = [
      {id: 1, itemName: "Adoptar"},
      {id: 2, itemName: "Acoger"},
      ]

  }

}
