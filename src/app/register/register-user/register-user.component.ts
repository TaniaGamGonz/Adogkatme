import { Component, OnInit } from "@angular/core";
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';
import { Person } from 'src/app/core/models/person';
import { Router } from '@angular/router';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"]
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private router: Router,
    private countriesService: CountriesService)
   {}
  private countries: Array<Object>;
  private cities: Array<Object>;;
  private person: Person = new Person();
  private dropdownCountrySettings: Object;
  private dropdownCitySettings: Object;

  ngOnInit() {

    let dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
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


     this.cities = this.countriesService.getCities();
     this.countries = this.countriesService.getCountries();
  }

  showPueblo(event):void{
    this.person.country = [event];
    console.log(event);
}


  onSubmit(){
    console.log(this.person);
    //this.router.navigate(["/registro-adicional",{ person :this.person }]);
  }
}
