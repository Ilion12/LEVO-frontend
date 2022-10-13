import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoConsultaComponent } from './vehiculo-consulta/vehiculo-consulta.component';
import { VehiculoEditarComponent } from './vehiculo-editar/vehiculo-editar.component';
import { DatosTecnicosInteresConsultaComponent } from './vehiculo-consulta/datos-tecnicos-interes-consulta/datos-tecnicos-interes-consulta.component';
import { MantenimientoPreventivoConsultaComponent } from './vehiculo-consulta/mantenimiento-preventivo-consulta/mantenimiento-preventivo-consulta.component';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { DatosTecnicosInteresFormComponent } from './vehiculo-form/datos-tecnicos-interes-form/datos-tecnicos-interes-form.component';
import { MantenimientoPreventivoFormComponent } from './vehiculo-form/mantenimiento-preventivo-form/mantenimiento-preventivo-form.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { MantenimientoFormComponent } from './mantenimientos/mantenimiento-form/mantenimiento-form.component';
import { MantenimientoItemComponent } from './mantenimientos/mantenimiento-item/mantenimiento-item.component';
import { MantenimientoConsultarComponent } from './mantenimientos/mantenimiento-consultar/mantenimiento-consultar.component';
import { MantenimientoEditarComponent } from './mantenimientos/mantenimiento-editar/mantenimiento-editar.component';
import { VehiculoItemComponent } from './vehiculo-item/vehiculo-item.component';
import { ManteniminentoPreventivoEditarComponent } from './vehiculo-editar/manteniminento-preventivo-editar/manteniminento-preventivo-editar.component';
import { ManteniminentoPreventivoItemComponent } from './vehiculo-item/manteniminento-preventivo-item/manteniminento-preventivo-item.component';
import { DatosTecnicosInteresItemComponent } from './vehiculo-item/datos-tecnicos-interes-item/datos-tecnicos-interes-item.component';
import { DatosTecnicosInteresEditarComponent } from './vehiculo-editar/datos-tecnicos-interes-editar/datos-tecnicos-interes-editar.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    VehiculoConsultaComponent,
    VehiculoEditarComponent,
    DatosTecnicosInteresConsultaComponent,
    MantenimientoPreventivoConsultaComponent,
    VehiculoFormComponent,
    DatosTecnicosInteresFormComponent,
    MantenimientoPreventivoFormComponent,
    MantenimientosComponent,
    MantenimientoFormComponent,
    MantenimientoItemComponent,
    MantenimientoConsultarComponent,
    MantenimientoEditarComponent,
    VehiculoItemComponent,
    ManteniminentoPreventivoEditarComponent,
    ManteniminentoPreventivoItemComponent,
    DatosTecnicosInteresItemComponent,
    DatosTecnicosInteresEditarComponent,
    VehiculosComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule
  ],
  providers:[AuxiliarService],
  exports:[VehiculoConsultaComponent]
})
export class VehiculoModule { }
