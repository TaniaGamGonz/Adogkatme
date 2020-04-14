import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/models/person';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { FormService } from 'src/app/core/services/form.service';
import { PersonService } from 'src/app/core/services/person.service';

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

  onSubmit(): void{
    this.person.photo = "https://picsum.photos/200/300";
    this.personService.createUser(this.person).subscribe();
    console.log(this.person);
    // this.router.navigate(["/registro-exitoso"]);

  }

  ngOnDestroy(): void {
    this.formsService.firstForm = null;
  }

}
