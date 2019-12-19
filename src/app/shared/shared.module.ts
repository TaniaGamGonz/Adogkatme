import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckCardsComponent } from './deck-cards/deck-cards.component';
import { PetCardComponent } from './deck-cards/pet-card/pet-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProtectiveCardComponent } from './deck-cards/protective-card/protective-card.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const COMPONENTS = [
  DeckCardsComponent,
  PetCardComponent,
  SearchBarComponent,
  ModalComponent,
  ProtectiveCardComponent,
  DropdownComponent,
  TooltipComponent,
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ImageUploadModule.forRoot(),
    RouterModule,
    FormsModule,
    AngularMultiSelectModule,
  ],
  exports: [
    ...COMPONENTS,
    ImageUploadModule,
    CommonModule,
    AngularMultiSelectModule,
    FormsModule,
  ]

})
export class SharedModule { }
