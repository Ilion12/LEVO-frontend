import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoConsultaComponent } from '../vehiculo/vehiculos/vehiculo-consulta/vehiculo-consulta.component';
import { VehiculoEditarComponent } from '../vehiculo/vehiculos/vehiculo-editar/vehiculo-editar.component';
import { FormularioComponent } from '../vehiculo/formulario/formulario.component';
import { VehiculosComponent } from '../vehiculo/vehiculos/vehiculos.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DatosTecnicosInteresConsultaComponent } from '../vehiculo/vehiculos/datos-tecnicos-interes-consulta/datos-tecnicos-interes-consulta.component';
const routes: Routes = [
  {
  path: '',
  component: AdministradorComponent
},
{
  path:'formulario',
  component:FormularioComponent
},
{path:'vehiculos',
component:VehiculosComponent},
{
  path: 'consultar/:id',
  component: VehiculoConsultaComponent
},
{path:'consultar/:id/datostecnicosinteres',
component: DatosTecnicosInteresConsultaComponent},
{
  path: 'editar/:id',
  component: VehiculoEditarComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
