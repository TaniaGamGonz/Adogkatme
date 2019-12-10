import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
  ]

})
export class LoginModule { }
