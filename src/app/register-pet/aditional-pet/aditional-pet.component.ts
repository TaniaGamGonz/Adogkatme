import { Component, OnInit } from "@angular/core";
import { Pet } from "src/app/core/models/pet";
import { DropdownService } from "src/app/core/services/dropdown.service";

@Component({
  selector: "app-aditional-pet",
  templateUrl: "./aditional-pet.component.html",
  styleUrls: ["./aditional-pet.component.scss"]
})
export class AditionalPetComponent implements OnInit {
  constructor(private drodpdownService: DropdownService) {}
  private petIndependence: Array<Object>;
  private petNoise: Array<Object>;
  private reasonAdoption: Array<Object>;
  private pet: Pet = new Pet();
  private dropdownIndependenceSettings: Object;
  private dropdownNoiseSettings: Object;
  private dropdownReasonSettings: Object;




  ngOnInit() {
    this.petIndependence = this.drodpdownService.getPetIndependence();
    this.petNoise = this.drodpdownService.getPetNoise();
    this.reasonAdoption = this.drodpdownService.getReasonAdoption();

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
    this.dropdownIndependenceSettings = {
      ...dropdownSettings,
      text: 'Nivel de independencia'
    };
    this.dropdownNoiseSettings = {
      ...dropdownSettings,
      text: '¿Es muy ruidoso?'
    };
    this.dropdownReasonSettings = {
      ...dropdownSettings,
      text: '¿Motivo de la adopción?'
    };





  }
}
