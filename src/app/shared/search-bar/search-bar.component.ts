import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searched = new EventEmitter<boolean>();

  constructor(
    private countriesService: CountriesService,
    private dropdownService: DropdownService

  ) { }
   private optionAdopcion: Array<Object>;
   private cities: Array<Object>;
   private formSearch: Object;
   private dropdownCitiesSettings: Object;
   private dropdownCountriesSettings: Object;
   private countries: Array<Object>
   private model: Object = {};
  ngOnInit() {
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();
    this.optionAdopcion = this.dropdownService.getOptionAdoption();

    this.dropdownCitiesSettings = {
      singleSelection: true,
      enableCheckAll: false,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: true,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: false,
      text: 'Escoge tu ciudad',
      classes: 'form-group__control--search-bar'
    };
    this.dropdownCountriesSettings =""


  }

  onSubmit(form: NgForm) {
    if(form.valid)
      this.searched.emit(form.value);

  }

}
