import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { MantenimientoFormComponent } from './mantenimientos/mantenimiento-form/mantenimiento-form.component';
import { MantenimientoItemComponent } from './mantenimientos/mantenimiento-item/mantenimiento-item.component';
import { MantenimientoConsultarComponent } from './mantenimientos/mantenimiento-consultar/mantenimiento-consultar.component';
import { MantenimientoEditarComponent } from './mantenimientos/mantenimiento-editar/mantenimiento-editar.component';
import { VehiculoItemComponent } from './vehiculo-item/vehiculo-item.component';
import { ManteniminentoPreventivoItemComponent } from './vehiculo-item/manteniminento-preventivo-item/manteniminento-preventivo-item.component';
import { DatosTecnicosInteresItemComponent } from './vehiculo-item/datos-tecnicos-interes-item/datos-tecnicos-interes-item.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EditarComponent } from './editar/editar.component';
import { DatosTecnicosInteresConsultaComponent } from './consulta/datos-tecnicos-interes-consulta/datos-tecnicos-interes-consulta.component';
import { MantenimientoPreventivoConsultaComponent } from './consulta/mantenimiento-preventivo-consulta/mantenimiento-preventivo-consulta.component';
import { VehiculoConsultaComponent } from './consulta/vehiculo-consulta/vehiculo-consulta.component';
import { DatosTecnicosInteresEditarComponent } from './editar/datos-tecnicos-interes-editar/datos-tecnicos-interes-editar.component';
import { ManteniminentoPreventivoEditarComponent } from './editar/manteniminento-preventivo-editar/manteniminento-preventivo-editar.component';
import { VehiculoEditarComponent } from './editar/vehiculo-editar/vehiculo-editar.component';
import { DatosIdentificativosFormComponent } from './formulario/datos-identificativos-form/datos-identificativos-form.component';
import { DatosTecnicosInteresFormComponent } from './formulario/datos-tecnicos-interes-form/datos-tecnicos-interes-form.component';
import { PlanPreventivoFormComponent } from './formulario/plan-preventivo-form/plan-preventivo-form.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    VehiculoConsultaComponent,
    VehiculoEditarComponent,
    DatosTecnicosInteresConsultaComponent,
    MantenimientoPreventivoConsultaComponent,
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
    VehiculosComponent,
    FormularioComponent,
    ConsultaComponent,
    EditarComponent,
    DatosIdentificativosFormComponent,
    DatosTecnicosInteresFormComponent,
    PlanPreventivoFormComponent
  ],
  imports: [
    CommonModule,
  VehiculoRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule, MatStepperModule,
  MatSliderModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, 
  MatSelectModule],
  providers:[AuxiliarService],
  exports:[VehiculoConsultaComponent,  MatFormFieldModule, MatInputModule ]
})
export class VehiculoModule { }
