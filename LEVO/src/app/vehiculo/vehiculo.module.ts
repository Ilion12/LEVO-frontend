import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoConsultaComponent } from './vehiculo-consulta/vehiculo-consulta.component';
import { VehiculoEditarComponent } from './vehiculo-editar/vehiculo-editar.component';
import { DatosIdentificativosConsultaComponent } from './vehiculo-consulta/datos-identificativos-consulta/datos-identificativos-consulta.component';
import { DatosTecnicosInteresConsultaComponent } from './vehiculo-consulta/datos-tecnicos-interes-consulta/datos-tecnicos-interes-consulta.component';
import { MantenimientoPreventivoConsultaComponent } from './vehiculo-consulta/mantenimiento-preventivo-consulta/mantenimiento-preventivo-consulta.component';
import { ListaMantenimientosComponent } from './vehiculo-consulta/lista-mantenimientos/lista-mantenimientos.component';


@NgModule({
  declarations: [
    VehiculoConsultaComponent,
    VehiculoEditarComponent,
    DatosIdentificativosConsultaComponent,
    DatosTecnicosInteresConsultaComponent,
    MantenimientoPreventivoConsultaComponent,
    ListaMantenimientosComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule
  ],
  exports:[VehiculoConsultaComponent]
})
export class VehiculoModule { }
