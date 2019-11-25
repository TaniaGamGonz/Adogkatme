import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePetComponent } from './profile-pet/profile-pet.component';



@NgModule({
  declarations: [
    ProfilePetComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfilePetComponent,
  ]
})
export class PerfilPetModule { }
