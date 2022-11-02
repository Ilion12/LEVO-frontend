import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MantenimientoEditarComponent } from "./vehiculos/mantenimiento-editar/mantenimiento-editar.component";
import { MantenimientoFormComponent } from "./vehiculos/mantenimiento-form/mantenimiento-form.component";
import { VehiculoConsultaComponent } from "./vehiculos/vehiculo-consulta/vehiculo-consulta.component";
import { VehiculoEditarComponent } from "./vehiculos/vehiculo-editar/vehiculo-editar.component";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";

const routes: Routes = [
  {
    path: "",
    component: VehiculosComponent,
  },
  {
    path: "mantenimientoForm/:id",
    component: MantenimientoFormComponent,
  },
  {
    path: "consultar/:id",
    component: VehiculoConsultaComponent,
  },
  {
    path: "editar/:id",
    component: VehiculoEditarComponent,
  },
  {
    path: "mantenimientosrealizados/editar/:id",
    component: MantenimientoEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoRoutingModule {}
