import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searched = new EventEmitter<Array<string>>();
  @Input() placeholder: String;

  constructor(
    private countriesService: CountriesService,
    private dropdownService: DropdownService

  ) { }
   private optionAdopcion: Array<Object>;
   private cities: Array<Object>;
   private formSearch: Object;
   private dropdownCitiesSettings: Object;
   private dropdownCountriesSettings: Object;
   private dropdownPetSettings: Object;
   private countries: Array<Object>
   private model: Object = {};
   public typingNow: string = " ";
   private positionType: number = 0;
   private finishedTyping: boolean = false;



  ngOnInit() {
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();

    this.dropdownCitiesSettings = {
      singleSelection: true,
      enableCheckAll: false,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      filterSelectAllText: "Selecciona todos",
      filterUnSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: true,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: false,
      text: 'Escoge tu ciudad',
      classes: 'form-group__control--search-bar',
    };
    this.dropdownPetSettings = {
      ...this.dropdownCitiesSettings,
      showCheckbox: true,
      singleSelection: false,
      enableCheckAll: true,
    }
    this.dropdownCountriesSettings = {
      ...this.dropdownCitiesSettings,
      text: 'Escoge tu comunidad',
    }

    setInterval(()=> {
      this.typeAndDeletePlaceholder(this.placeholder); },100);

  }

  onDeSelectAll( model, item){
    model[item] = null;
  }



  typeAndDeletePlaceholder(sentence){
   this.typingAlone(sentence);

    if(!this.finishedTyping && this.positionType === sentence.length+1){
      this.finishedTyping = true;
    }
    if(this.finishedTyping && this.positionType !== 1){
      this.deleteAlone();
    }
    if(this.finishedTyping && this.positionType === 1){
      this.finishedTyping = false;
      this.positionType = 0;
    }
  }

  typingAlone(sentence){
    if(!this.finishedTyping && this.positionType <= sentence.length){
      this.typingNow = this.typingNow + sentence.charAt(this.positionType);
      this.positionType++;
    }
  }

  deleteAlone(){
    this.typingNow = this.typingNow.substring(0, this.typingNow.length-1);
    this.positionType--
  }




  onSubmit(form: NgForm) {
    let searchParams: any[] = []

    form.value.text ? searchParams.push(form.value.text) : searchParams.push(null);

    form.value.country? searchParams.push(form.value.country[0].itemName) : searchParams.push(null);

    form.value.city? searchParams.push(form.value.city[0].itemName) : searchParams.push(null);

    this.searched.emit(searchParams);

  }

}
