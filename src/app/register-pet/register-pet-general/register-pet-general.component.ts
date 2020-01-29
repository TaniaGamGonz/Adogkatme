import { Component, OnInit } from "@angular/core";
import { CountriesService } from "src/app/core/services/countries.services/countries.service";
import { Pet } from 'src/app/core/models/pet';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-register-pet-general",
  templateUrl: "./register-pet-general.component.html",
  styleUrls: ["./register-pet-general.component.scss"]
})
export class RegisterPetGeneralComponent implements OnInit {
  constructor(
    private countriesService: CountriesService,
    private dropdownService: DropdownService,
    private router: Router,
    private formService: FormService
    ) {}
  private petHealth: Array<Object>;
  private petAge: Array<Object>;
  private petSize: Array<Object>;
  private petActivity: Array<Object>;
  private countries: Array<Object>;
  private cities: Array<Object>;
  private pet: Pet;
  private dropdownCountrySettings: Object;
  private dropdownCitySettings: Object;
  private dropdownHealthSettings: Object;
  private dropdownAgeSettings: Object;
  private dropdownSizeSettings: Object;
  private dropdownActivitySettings: Object;




  ngOnInit() {
    this.pet = new Pet ({});
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

  onSubmit(form: NgForm){
    this.pet.health = form.value.health[0].itemName;
    this.pet.age = form.value.ageAnimal+" "+form.value.age[0].itemName;
    this.pet.size = form.value.size[0].itemName;
    this.pet.activity = form.value.activity[0].itemName;
    this.pet.country = form.value.country[0].itemName;
    this.pet.city = form.value.city[0].itemName;
    this.pet.photos = ["assets/images/aslan.jpg"];

    this.formService.firstForm = this.pet;
    this.router.navigate(["/adopcion/sanitario"]);
  }

}
