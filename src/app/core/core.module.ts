import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderLoggedComponent } from './components/header/header-logged/header-logged.component';
import { HeaderNoLoggedComponent } from './components/header/header-no-logged/header-no-logged.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  HeaderComponent,
  HeaderLoggedComponent,
  HeaderNoLoggedComponent,
  NavbarComponent,
  FooterComponent,
  LogoComponent,

];

const MODULES = [
  BrowserModule,
  RouterModule,
]


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports:[
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class CoreModule { }
