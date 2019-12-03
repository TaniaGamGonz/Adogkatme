import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ProtectiveSearchComponent } from './protective/protective-search/protective-search.component';
import { ErrorComponent } from './core/components/error/error.component';
import { RegisterPetComponent } from './register-pet/register-pet/register-pet.component';
import { RegisterComponent } from './register/register/register.component';
import { AditionalRegisterComponent } from './register/aditional-register/aditional-register.component';
import { SanitaryRegisterComponent } from './register-pet/sanitary-register/sanitary-register.component';
import { AditionalPetComponent } from './register-pet/aditional-pet/aditional-pet.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protectoras', component: ProtectiveSearchComponent},
  { path: 'adopcion', component: RegisterPetComponent},
  { path: 'adopcion-sanitario', component: SanitaryRegisterComponent},
  { path: 'adopcion-adicional', component: AditionalPetComponent},
  { path: 'registro', component: RegisterComponent},
  { path: 'registro-adicional', component: AditionalRegisterComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
