import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';
import { Observable, Subscription } from 'rxjs';
import { DropdownService } from 'src/app/core/services/dropdown.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{


  constructor(
    private petService: PetsService,
    private dropdownService: DropdownService
  ) { }

  public pets$: Observable<Pet[]>;
  public petList: Array<Pet>;
  private petsFoundsSubscription: Subscription;
  public petFounds: Array<Pet>;
  public selectedId: number;
  public dropdownSettings: Object;
  public selectedAdoption: Object;

  ngOnInit() {
    this.pets$ = this.petService.getPets();

    this.dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
      selectAllText: "Selecciona todos",
      filterSelectAllText: "Selecciona todos",
      filterUnSelectAllText: "Deshacer toda la seleccion",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: false,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: false,
      text: 'Selecciona un estado...',
      classes: 'dropdown form-group__control--search-bar'
    };


  }

  onSearchBar(event){

    this.petsFoundsSubscription = this.petService.getPets().subscribe(
      pets =>{
        this.petList = pets;
        const text: string = event[0].trim();
        const country: string = event[1];
        const  city: string = event[2];
       this.petFounds = this.petList.filter(pet => {
          let coincidence=false;

         let arrayPropiedadesPet : Array<Pet> = Object.values(pet).filter( petProperty => {
          if(typeof petProperty === "string"){
             return petProperty.toLowerCase().includes(text.toLowerCase())
          }else{
            return false;
          }
          });

          if (country &&  pet.country.toLowerCase() === country.toLowerCase()){
            pet.country.toLowerCase() === country.toLowerCase() ? coincidence = true : coincidence = false;
          }
          if (city){
              pet.city.toLowerCase() === city.toLowerCase() ? coincidence = true : coincidence = false;
           }
         return arrayPropiedadesPet.length>0 && coincidence;
       });
      } );

  }
  ngOnDestroy(): void {

  }




}
