import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { SharedModule } from '../shared/shared.module';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';



@NgModule({
  declarations: [
    RegisterPetComponent,
    BreadCrumbsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    RegisterPetComponent,
    BreadCrumbsComponent,
  ]
})
export class RegisterPetModule { }
