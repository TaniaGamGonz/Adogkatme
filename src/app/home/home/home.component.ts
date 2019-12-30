import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private petService: PetsService,
  ) { }
  private optionAdopcion: Array<Object>;


  public pets: Pet[];

  ngOnInit() {
    this.pets = this.petService.getPets();
    this.optionAdopcion = [
      {id: 1, itemName: "Adoptar"},
      {id: 2, itemName: "Acoger"},
      ]


  }


}
