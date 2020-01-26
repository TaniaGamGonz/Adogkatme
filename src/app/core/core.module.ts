import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderLoggedComponent } from './components/header/header-logged/header-logged.component';
import { HeaderNoLoggedComponent } from './components/header/header-no-logged/header-no-logged.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  HeaderComponent,
  HeaderLoggedComponent,
  HeaderNoLoggedComponent,
  NavbarComponent,
  FooterComponent,
  LogoComponent,
  ErrorComponent,

];

const MODULES = [
  SharedModule,
  RouterModule,
  HttpClientModule,
]


@NgModule({
  declarations: [
    ...COMPONENTS,

  ],
  imports:[
    ...MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
