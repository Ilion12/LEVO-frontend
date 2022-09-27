import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FormularioAltaVehiculoComponent } from './formulario-alta-vehiculo/formulario-alta-vehiculo.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    FormularioAltaVehiculoComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,FontAwesomeModule, FormsModule
  ],
  providers:[],
  exports:[AdministradorComponent]

})
export class AdministradorModule { }
