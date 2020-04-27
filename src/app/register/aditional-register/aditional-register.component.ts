import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/models/person';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { FormService } from 'src/app/core/services/form.service';
import { PersonService } from 'src/app/core/services/person.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'aditional-register',
  templateUrl: './aditional-register.component.html',
  styleUrls: ['./aditional-register.component.scss']
})
export class AditionalRegisterComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private dropdownService: DropdownService,
    private formsService: FormService,
    private personService: PersonService,
  ) { }
  private livingPlace: Array<Object>;
  private optionAdopcion: Array<Object>;
  private otherPets: Array<Object>;
  private person: Person;
  private phonePattern: RegExp = /(6|9)\d{8}/;
  private dropdownSettings: Object;
  private dropdownPetSettings: Object;
  private dropdownLivingPlaceSettings: Object;



  ngOnInit(): void {
    this.person = new Person({...this.formsService.firstForm});
    this.livingPlace = this.dropdownService.getLivingPlace();
    this.optionAdopcion = this.dropdownService.getOptionAdoption();
    this.otherPets = this.dropdownService.getOtherPets();

     this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: true,
      selectAllText: "Selecciona todos",
      filterSelectAllText: "Selecciona todos",
      filterUnSelectAllText: "Deshacer toda la seleccion",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: false,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: true,
      text: 'Selecciona una o varias'
    };

    this.dropdownPetSettings = {
      singleSelection: false,
      enableCheckAll: true,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      filterSelectAllText: "Selecciona todos",
      filterUnSelectAllText: "Deshacer toda la seleccion",
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

  onSubmit(form: NgForm): void{
    this.person.livingPlace = form.value.livingPlace ? form.value.livingPlace[0].itemName : "Desconocido/a" ;
    this.person.pets = [];
    this.person.interestedIn = []
    if(form.value.pets){
      form.value.pets.forEach(element => {
        this.person.pets.push(element.itemName)
      });
    }
    if(form.value.interestedIn){
      form.value.interestedIn.forEach(element => {
        this.person.interestedIn.push(element.itemName)
      });
    }
   this.personService.createUser(this.person).subscribe(resp =>{
     if(resp.created){
      this.router.navigate(["/registro-exitoso"]);
     }else{
      this.router.navigate(["/error"])
     }
   });

  }

  ngOnDestroy(): void {
    this.formsService.firstForm = null;
  }

}
