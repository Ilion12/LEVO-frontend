import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { VehiculoModule } from '../vehiculo/vehiculo.module';
@NgModule({
  declarations: [
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,FontAwesomeModule, FormsModule, VehiculoModule
  ],
  providers:[],
  exports:[AdministradorComponent]

})
export class AdministradorModule { }
