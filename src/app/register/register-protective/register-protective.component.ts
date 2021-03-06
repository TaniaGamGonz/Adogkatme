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
  private protective: Protective;
  private dropdownCountrySettings: Object;
  private dropdownCitySettings: Object;
  private passwordRegExp: RegExp= /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;




  ngOnInit() {
    this.protective = new Protective({});
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();

    let dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
      filterSelectAllText: "Selecciona todos",
      filterUnSelectAllText: "Deshacer toda la seleccion",
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: true,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: false,
    };

    this.dropdownCountrySettings = {
      ...dropdownSettings,
      text: 'Escoge tu comunidad'
    };

    this.dropdownCitySettings = {
      ...dropdownSettings,
      text: 'Escoge tu ciudad'
    };
  }

  checkSamePassword(password: string, confirmPassword: string):boolean{
    return (password === confirmPassword);
  }
  onSubmit(){
    console.log(this.protective);
  }


}
