import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';
import { Protective } from 'src/app/core/models/protective';

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
  private protective: Protective = new Protective;


  ngOnInit() {
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();

  }

}
