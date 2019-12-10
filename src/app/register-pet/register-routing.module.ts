import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanitaryRegisterComponent } from './sanitary-register/sanitary-register.component';
import { AditionalPetComponent } from './aditional-pet/aditional-pet.component';
import { RegisterPetGeneralComponent } from './register-pet-general/register-pet-general.component';


const routes: Routes = [
  {path: '', component: RegisterPetGeneralComponent,  },
  {path: 'sanitario', component: SanitaryRegisterComponent,  },
  {path: 'adicional', component: AditionalPetComponent,  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
