import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AditionalRegisterComponent } from './aditional-register/aditional-register.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterProtectiveComponent } from './register-protective/register-protective.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    AditionalRegisterComponent,
    RegisterProtectiveComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    RegisterComponent,
    AditionalRegisterComponent,
  ]
})
export class RegisterModule { }
