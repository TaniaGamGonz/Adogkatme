import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';

@Component({
  selector: 'app-register-protective',
  templateUrl: './register-protective.component.html',
  styleUrls: ['./register-protective.component.scss']
})
export class RegisterProtectiveComponent implements OnInit {

  constructor(
    private countriesService: CountriesService

  ) { }
  private countries: Array<Object>;
  private cities: Array<Object>;

  ngOnInit() {
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();

  }

}
