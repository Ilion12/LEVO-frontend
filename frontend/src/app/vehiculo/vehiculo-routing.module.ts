import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoFormComponent } from './mantenimientos/mantenimiento-form/mantenimiento-form.component';
import { DatosTecnicosInteresConsultaComponent } from './vehiculos/datos-tecnicos-interes-consulta/datos-tecnicos-interes-consulta.component';
import { MantenimientoPreventivoConsultaComponent } from './vehiculos/mantenimiento-preventivo-consulta/mantenimiento-preventivo-consulta.component';
import { VehiculoConsultaComponent } from './vehiculos/vehiculo-consulta/vehiculo-consulta.component';
import { VehiculoEditarComponent } from './vehiculos/vehiculo-editar/vehiculo-editar.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
 {
  path:'',
  component:VehiculosComponent
 }, {
    path:'mantenimientoForm',
    component:MantenimientoFormComponent
  },
  {
    path: 'datosTecnicosInteresConsulta',
    component:DatosTecnicosInteresConsultaComponent
  },
  {
    path: 'mantenimientoPreventivoConsulta',
    component:MantenimientoPreventivoConsultaComponent
  },

  {
    path: 'consultar/:id',
    component: VehiculoConsultaComponent
  },
  {
    path: 'editar/:id',
    component: VehiculoEditarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
