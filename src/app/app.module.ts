import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { PerfilModule } from './perfil/perfil.module';
import { PerfilPetModule } from './perfil-pet/perfil-pet.module';
import { RegisterModule } from './register/register.module';
import { RegisterPetModule } from './register-pet/register-pet.module';
import { HttpClientModule } from '@angular/common/http';
import { ProtectiveModule } from './protective/protective.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    AppRoutingModule,
    HomeModule,
    SharedModule,
    CoreModule,
    LoginModule,
    PerfilModule,
    PerfilPetModule,
    RegisterModule,
    RegisterPetModule,
    HttpClientModule,
    ProtectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
