import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FormularioAltaVehiculoComponent } from './formulario-alta-vehiculo/formulario-alta-vehiculo.component';
import { DatosIdentificativosComponent } from './formulario-alta-vehiculo/datos-identificativos/datos-identificativos.component';
import { DatosTecnicosInteresComponent } from './formulario-alta-vehiculo/datos-tecnicos-interes/datos-tecnicos-interes.component';
import { MantenimientoPreventivoComponent } from './formulario-alta-vehiculo/mantenimiento-preventivo/mantenimiento-preventivo.component';
@NgModule({
  declarations: [
    AdministradorComponent,
    FormularioAltaVehiculoComponent,
    DatosIdentificativosComponent,DatosTecnicosInteresComponent,MantenimientoPreventivoComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,FontAwesomeModule, FormsModule
  ],
  providers:[],
  exports:[AdministradorComponent]

})
export class AdministradorModule { }
