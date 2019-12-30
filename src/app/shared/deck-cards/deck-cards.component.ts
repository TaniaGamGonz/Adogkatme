import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';

@Component({
  selector: 'deck-cards',
  templateUrl: './deck-cards.component.html',
  styleUrls: ['./deck-cards.component.scss']
})
export class DeckCardsComponent implements OnInit {


  constructor(
    private petService: PetsService,
  ) { }
  public pets: Pet[];

  ngOnInit() {
    this.pets = this.petService.getPets();

  }
}
