import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTecnicosInteresFormComponent } from '../vehiculo/vehiculo-form/datos-tecnicos-interes-form/datos-tecnicos-interes-form.component';
import { MantenimientoPreventivoFormComponent } from '../vehiculo/vehiculo-form/mantenimiento-preventivo-form/mantenimiento-preventivo-form.component';
import { VehiculoFormComponent } from '../vehiculo/vehiculo-form/vehiculo-form.component';
import { VehiculosComponent } from '../vehiculo/vehiculos/vehiculos.component';
import { AdministradorComponent } from './administrador/administrador.component';
const routes: Routes = [
  {
  path: '',
  component: AdministradorComponent
},
{
  path:'formulario-alta-vehiculo',
  component: VehiculoFormComponent
},
{
  path:'datosTecnicosInteresForm',
  component: DatosTecnicosInteresFormComponent
},
{
  path:'mantenimientoPreventivoForm',
  component: MantenimientoPreventivoFormComponent
},
{path:'vehiculos',
component:VehiculosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
