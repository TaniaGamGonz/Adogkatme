import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AditionalRegisterComponent } from './aditional-register/aditional-register.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegisterComponent,
    AditionalRegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RegisterComponent,
    AditionalRegisterComponent,
  ]
})
export class RegisterModule { }
