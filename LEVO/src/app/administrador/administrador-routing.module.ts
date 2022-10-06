import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosIdentificativosFormComponent } from '../vehiculo/vehiculo-form/datos-identificativos-form/datos-identificativos-form.component';
import { DatosTecnicosInteresFormComponent } from '../vehiculo/vehiculo-form/datos-tecnicos-interes-form/datos-tecnicos-interes-form.component';
import { MantenimientoPreventivoFormComponent } from '../vehiculo/vehiculo-form/mantenimiento-preventivo-form/mantenimiento-preventivo-form.component';
import { VehiculoFormComponent } from '../vehiculo/vehiculo-form/vehiculo-form.component';
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
  path:'datosIdentificativosForm',
  component: DatosIdentificativosFormComponent
},
{
  path:'datosTecnicosInteresForm',
  component: DatosTecnicosInteresFormComponent
},
{
  path:'mantenimientoPreventivoForm',
  component: MantenimientoPreventivoFormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
