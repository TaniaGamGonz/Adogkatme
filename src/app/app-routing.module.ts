import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ProtectiveSearchComponent } from './protective/protective-search/protective-search.component';
import { ErrorComponent } from './core/components/error/error.component';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { RegisterComponent } from './register/register/register.component';
import { AditionalRegisterComponent } from './register/aditional-register/aditional-register.component';
import { ProfileComponent } from './perfil/profile/profile.component';
import { ProtectiveProfileComponent } from './protective/protective-profile/protective-profile.component';
import { ProfilePetComponent } from './perfil-pet/profile-pet/profile-pet.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protectoras', component: ProtectiveSearchComponent},
  { path: 'adopcion', component: RegisterPetComponent,
    loadChildren: () => import('./register-pet/register-pet.module').then(mod => mod.RegisterPetModule), },
  { path: 'registro', component: RegisterComponent},
  { path: 'registro-adicional', component: AditionalRegisterComponent },
  { path: 'perfil', component: ProfileComponent},
  { path: 'mascota', component: ProfilePetComponent},
  { path: 'protectora', component: ProtectiveProfileComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
