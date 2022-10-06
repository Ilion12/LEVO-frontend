import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoConsultaComponent } from './vehiculo-consulta/vehiculo-consulta.component';
import { VehiculoEditarComponent } from './vehiculo-editar/vehiculo-editar.component';
import { DatosIdentificativosConsultaComponent } from './vehiculo-consulta/datos-identificativos-consulta/datos-identificativos-consulta.component';
import { DatosTecnicosInteresConsultaComponent } from './vehiculo-consulta/datos-tecnicos-interes-consulta/datos-tecnicos-interes-consulta.component';
import { MantenimientoPreventivoConsultaComponent } from './vehiculo-consulta/mantenimiento-preventivo-consulta/mantenimiento-preventivo-consulta.component';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { DatosIdentificativosFormComponent } from './vehiculo-form/datos-identificativos-form/datos-identificativos-form.component';
import { DatosTecnicosInteresFormComponent } from './vehiculo-form/datos-tecnicos-interes-form/datos-tecnicos-interes-form.component';
import { MantenimientoPreventivoFormComponent } from './vehiculo-form/mantenimiento-preventivo-form/mantenimiento-preventivo-form.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { MantenimientoFormComponent } from './mantenimientos/mantenimiento-form/mantenimiento-form.component';
import { MantenimientoItemComponent } from './mantenimientos/mantenimiento-item/mantenimiento-item.component';
import { MantenimientoConsultarComponent } from './mantenimientos/mantenimiento-consultar/mantenimiento-consultar.component';
import { MantenimientoEditarComponent } from './mantenimientos/mantenimiento-editar/mantenimiento-editar.component';
import { VehiculoItemComponent } from './vehiculo-item/vehiculo-item.component';


@NgModule({
  declarations: [
    VehiculoConsultaComponent,
    VehiculoEditarComponent,
    DatosIdentificativosConsultaComponent,
    DatosTecnicosInteresConsultaComponent,
    MantenimientoPreventivoConsultaComponent,
    VehiculoFormComponent,
    DatosIdentificativosFormComponent,
    DatosTecnicosInteresFormComponent,
    MantenimientoPreventivoFormComponent,
    MantenimientosComponent,
    MantenimientoFormComponent,
    MantenimientoItemComponent,
    MantenimientoConsultarComponent,
    MantenimientoEditarComponent,
    VehiculoItemComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule
  ],
  exports:[VehiculoConsultaComponent]
})
export class VehiculoModule { }
