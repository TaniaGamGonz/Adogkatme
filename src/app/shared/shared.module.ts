import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckCardsComponent } from './deck-cards/deck-cards.component';
import { PetCardComponent } from './deck-cards/pet-card/pet-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProtectiveCardComponent } from './deck-cards/protective-card/protective-card.component';
import { ModalComponent } from './modal/modal.component';

const COMPONENTS = [
  DeckCardsComponent,
  PetCardComponent,
  SearchBarComponent,
  ModalComponent,
  ProtectiveCardComponent,

];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ImageUploadModule.forRoot(),
  ],
  exports: [
    ...COMPONENTS,
    ImageUploadModule,
    CommonModule,
  ]

})
export class SharedModule { }
