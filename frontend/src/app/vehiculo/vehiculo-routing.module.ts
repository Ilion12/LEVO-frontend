import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./formulario/formulario.component";
import { MantenimientoEditarComponent } from "./vehiculos/mantenimiento-editar/mantenimiento-editar.component";
import { MantenimientoFormComponent } from "./vehiculos/mantenimiento-form/mantenimiento-form.component";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";

const routes: Routes = [
  {
    path: "vehiculos",
    component: VehiculosComponent,
  },
  {path:"administrador/vehiculo/formulario",
  component:FormularioComponent},
  {
    path: "administrador/mantenimientoForm/:id",
    component: MantenimientoFormComponent,
  },
 
  {
    path: "administrador/mantenimientosrealizados/editar/:id",
    component: MantenimientoEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoRoutingModule {}
