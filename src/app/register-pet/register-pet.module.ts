import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPetComponent } from './register-pet.component';
import { SharedModule } from '../shared/shared.module';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SanitaryRegisterComponent } from './sanitary-register/sanitary-register.component';
import { AditionalPetComponent } from './aditional-pet/aditional-pet.component';
import { RegisterPetGeneralComponent } from './register-pet-general/register-pet-general.component';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
    RegisterPetComponent,
    BreadCrumbsComponent,
    SanitaryRegisterComponent,
    AditionalPetComponent,
    RegisterPetGeneralComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
  ],
  exports: [
    BreadCrumbsComponent,
  ]
})
export class RegisterPetModule { }
