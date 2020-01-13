import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/models/person';
import { DropdownService } from 'src/app/core/services/dropdown.service';

@Component({
  selector: 'aditional-register',
  templateUrl: './aditional-register.component.html',
  styleUrls: ['./aditional-register.component.scss']
})
export class AditionalRegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private dropdownService: DropdownService,
  ) { }
  private livingPlace: Array<Object>;
  private optionAdopcion: Array<Object>;
  private otherPets: Array<Object>;
  private person: Person = new Person;
  private phonePattern: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  private dropdownSettings: Object;
  private dropdownLivingPlaceSettings: Object;



  ngOnInit() {
    this.livingPlace = this.dropdownService.getLivingPlace();
    this.optionAdopcion = this.dropdownService.getOptionAdoption();
    this.otherPets = this.dropdownService.getOtherPets();

     this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: true,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: false,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: true,
      text: 'Selecciona una o varias'
    };
    this.dropdownLivingPlaceSettings = {
      ...this.dropdownSettings,
      singleSelection: true,
      text: 'Escoge tu vivienda',
      showCheckbox: false,
      enableCheckAll: false,
    };

  }


  onSubmit(){
  }
}
