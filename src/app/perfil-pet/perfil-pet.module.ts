import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePetComponent } from './profile-pet/profile-pet.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfilePetComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProfilePetComponent,
  ]
})
export class PerfilPetModule { }
