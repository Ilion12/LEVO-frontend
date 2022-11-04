import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { VehiculoConsultaComponent } from '../vehiculo/vehiculos/vehiculo-consulta/vehiculo-consulta.component';
import { VehiculosComponent } from '../vehiculo/vehiculos/vehiculos.component';

const routes: Routes = [
  {
    path:'',
    component: UsuarioComponent
  },
  {
    path: "usuario/vehiculos",
    component: VehiculosComponent,
  },
  {
    path: "usuario/consultar/:id",
    component: VehiculoConsultaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
