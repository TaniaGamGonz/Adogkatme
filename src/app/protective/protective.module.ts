import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectiveProfileComponent } from './protective-profile/protective-profile.component';
import { ProtectiveSearchComponent } from './protective-search/protective-search.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProtectiveProfileComponent,
    ProtectiveSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProtectiveProfileComponent,
    ProtectiveSearchComponent
  ]

})
export class ProtectiveModule { }
