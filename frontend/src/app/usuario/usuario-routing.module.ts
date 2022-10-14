import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoConsultaComponent } from '../vehiculo/vehiculo-consulta/vehiculo-consulta.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path:'',
    component: UsuarioComponent
  }, 
  {path: 'vehiculo-consulta',
component: VehiculoConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
