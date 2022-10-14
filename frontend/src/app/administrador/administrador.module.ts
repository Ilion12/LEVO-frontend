import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,FontAwesomeModule, FormsModule
  ],
  providers:[],
  exports:[AdministradorComponent]

})
export class AdministradorModule { }
