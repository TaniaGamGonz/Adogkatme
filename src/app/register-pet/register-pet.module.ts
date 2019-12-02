import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { SharedModule } from '../shared/shared.module';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SanitaryRegisterComponent } from './sanitary-register/sanitary-register.component';
import { AditionalPetComponent } from './aditional-pet/aditional-pet.component';



@NgModule({
  declarations: [
    RegisterPetComponent,
    BreadCrumbsComponent,
    SanitaryRegisterComponent,
    AditionalPetComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    BreadCrumbsComponent,
  ]
})
export class RegisterPetModule { }
