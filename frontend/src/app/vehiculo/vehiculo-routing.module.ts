import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoConsultaComponent } from './vehiculos/vehiculo-consulta/vehiculo-consulta.component';
import { VehiculoEditarComponent } from './vehiculos/vehiculo-editar/vehiculo-editar.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
 {
  path:'',
  component:VehiculosComponent
 },
  {
    path: 'consultar/:id',
    component: VehiculoConsultaComponent
  },
  {
    path: 'editar/:id',
    component: VehiculoEditarComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
