import { Component, OnInit } from "@angular/core";
import { CountriesService } from "src/app/core/services/countries.services/countries.service";
import { Pet } from 'src/app/core/models/pet';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-register-pet-general",
  templateUrl: "./register-pet-general.component.html",
  styleUrls: ["./register-pet-general.component.scss"]
})
export class RegisterPetGeneralComponent implements OnInit {
  constructor(
    private countriesService: CountriesService,
    private dropdownService: DropdownService,
    private router: Router
    ) {}
  private petHealth: Array<Object>;
  private petAge: Array<Object>;
  private petSize: Array<Object>;
  private petActivity: Array<Object>;
  private countries: Array<Object>;
  private cities: Array<Object>;
  private pet: Pet = new Pet;
  private dropdownCountrySettings: Object;
  private dropdownCitySettings: Object;
  private dropdownHealthSettings: Object;
  private dropdownAgeSettings: Object;
  private dropdownSizeSettings: Object;
  private dropdownActivitySettings: Object;




  ngOnInit() {
    let dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: false,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: false,
    };
    this.dropdownHealthSettings = {
      ...dropdownSettings,
      text: 'Selecciona un estado...'
    };
    this.dropdownAgeSettings = {
      ...dropdownSettings,
      text: 'Selecciona la edad..',
      classes: 'dropdown flex-grow-1'
    };
    this.dropdownSizeSettings = {
      ...dropdownSettings,
      text: 'Selecciona el tamaño...'
    };
    this.dropdownActivitySettings = {
      ...dropdownSettings,
      text: 'Selecciona un nivel de actividad'
    };

    this.dropdownCountrySettings = {
      ...dropdownSettings,
      enableSearchFilter: true,
      text: 'Escoge tu comunidad'
    };

    this.dropdownCitySettings = {
      ...dropdownSettings,
      enableSearchFilter: true,
      text: 'Escoge tu ciudad'
    };


    this.petHealth = this.dropdownService.getPetHealth();
    this.petAge = this.dropdownService.getPetAge();
    this.petSize = this.dropdownService.getPetSize();
    this.petActivity = this.dropdownService.getPetActivity();
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();
  }

  onSubmit(){
    this.router.navigate(["sanitario"]);
  }

}
