import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aditional-pet',
  templateUrl: './aditional-pet.component.html',
  styleUrls: ['./aditional-pet.component.scss']
})
export class AditionalPetComponent implements OnInit {

  constructor() { }
  private petIndependence: Array<Object>;
  private petNoise: Array<Object>;
  private reasonAdoption: Array<Object>;


  ngOnInit() {
    this.petIndependence = [
      { id: 1, itemName: "Muy independiente" },
      { id: 2, itemName: "Dependiente por las noches" },
      { id: 3, itemName: "Poco dependiente" },
      { id: 4, itemName: "Muy dependiente" }
    ];
    this.petNoise = [
      { id: 1, itemName: "Muy ruidoso" },
      { id: 2, itemName: "Ruidoso por las noches" },
      { id: 3, itemName: "Poco ruidoso" },
    ];
    this.reasonAdoption = [
      { id: 1, itemName: "Divorcio" },
      { id: 2, itemName: "Nacimiento de bebé" },
      { id: 3, itemName: "Problemas económicos" },
      { id: 4, itemName: "Mudanza" },
      { id: 5, itemName: "Rescatado de la calle" }

    ];



  }

}
