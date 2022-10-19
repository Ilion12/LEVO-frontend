import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosIdentificativosFormComponent } from '../vehiculo/formulario/datos-identificativos-form/datos-identificativos-form.component';
import { DatosTecnicosInteresFormComponent } from '../vehiculo/formulario/datos-tecnicos-interes-form/datos-tecnicos-interes-form.component';
import { FormularioComponent } from '../vehiculo/formulario/formulario.component';
import { PlanPreventivoFormComponent } from '../vehiculo/formulario/plan-preventivo-form/plan-preventivo-form.component';
import { VehiculosComponent } from '../vehiculo/vehiculos/vehiculos.component';
import { AdministradorComponent } from './administrador/administrador.component';
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
component:VehiculosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
