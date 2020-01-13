import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DropdownService } from 'src/app/core/services/dropdown.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private petService: PetsService,
    private route: ActivatedRoute,
    private dropdownService: DropdownService
  ) { }
  private optionAdoption: Array<Object>;


  public pets$: Observable<Pet[]>;
  public petsFounds$: Observable<Pet[]>;
  public selectedId: number;
  public dropdownSettings: Object;
  public selectedAdoption: Object;

  ngOnInit() {
    this.pets$ = this.petService.getPets();


    this.dropdownSettings = {
      singleSelection: true,
      enableCheckAll: false,
      selectAllText: "Selecciona todos",
      unSelectAllText: "Deshacer toda la seleccion",
      enableSearchFilter: false,
      searchPlaceholderText: "Buscar",
      position: "bottom",
      showCheckbox: false,
      text: 'Selecciona un estado...',
      classes: 'dropdown form-group__control--search-bar'
    };

    this.optionAdoption = this.dropdownService.getOptionAdoption();


  }

  onSearchBar(event){

    this.petsFounds$ = this.petService.getPets();
  }




}
