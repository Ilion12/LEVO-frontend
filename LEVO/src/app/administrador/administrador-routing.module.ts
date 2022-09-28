import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { DatosIdentificativosComponent } from './formulario-alta-vehiculo/datos-identificativos/datos-identificativos.component';
import { DatosTecnicosInteresComponent } from './formulario-alta-vehiculo/datos-tecnicos-interes/datos-tecnicos-interes.component';
import { FormularioAltaVehiculoComponent } from './formulario-alta-vehiculo/formulario-alta-vehiculo.component';
import { MantenimientoPreventivoComponent } from './formulario-alta-vehiculo/mantenimiento-preventivo/mantenimiento-preventivo.component';

const routes: Routes = [
  {
  path: '',
  component: AdministradorComponent
},
{
  path:'formulario-alta-vehiculo',
  component: FormularioAltaVehiculoComponent
},
{
  path:'datosIdentificativos',
  component: DatosIdentificativosComponent
},
{
  path:'datosTecnicosInteres',
  component: DatosTecnicosInteresComponent
},
{
  path:'mantenimientoPreventivo',
  component: MantenimientoPreventivoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
