import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoFormComponent } from './mantenimientos/mantenimiento-form/mantenimiento-form.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
 {
  path:'',
  component:VehiculosComponent
 }, {
    path:'mantenimientoForm',
    component:MantenimientoFormComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
