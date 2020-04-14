import { Component, OnInit } from "@angular/core";
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';
import { Person } from 'src/app/core/models/person';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"]
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private router: Router,
    private countriesService: CountriesService,
    private formsService: FormService)
   {}
  private countries: Array<Object>;
  private cities: Array<Object>;;
  private person: Person;
  private dropdownCountrySettings: Object;
  private dropdownCitySettings: Object;
  private regExpAge: RegExp = /(1[89]|[2-9][0-9]|100)/;
  private passwordRegExp: RegExp= /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


  ngOnInit() {
    this.person = new Person({});
    let dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
      selectAllText: "Selecciona todos",
      filterSelectAllText: "Selecciona todos",
      filterUnSelectAllText: "Deshacer toda la seleccion",
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

  checkSamePassword(password: string, confirmPassword: string):boolean{
    return (password === confirmPassword);
  }




  onSubmit(form: NgForm){
    this.person.city =  form.value.city[0].itemName;
    this.person.country =  form.value.country[0].itemName;
    console.log(this.person);
    this.formsService.firstForm = this.person;
    this.router.navigate(["/registro-adicional"]);
  }
}
