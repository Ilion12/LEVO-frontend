import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VehiculoRoutingModule } from "./vehiculo-routing.module";
import { MantenimientoFormComponent } from "./vehiculos/mantenimiento-form/mantenimiento-form.component";
import { VehiculoItemComponent } from "./vehiculo-item/vehiculo-item.component";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormularioComponent } from "./formulario/formulario.component";
import { VehiculoConsultaComponent } from "./vehiculos/vehiculo-consulta/vehiculo-consulta.component";
import { VehiculoEditarComponent } from "./vehiculos/vehiculo-editar/vehiculo-editar.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MantenimientosComponent } from "./mantenimientos/mantenimientos.component";
import { MantenimientoItemComponent } from "./mantenimiento-item/mantenimiento-item.component";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    VehiculoConsultaComponent,
    VehiculoEditarComponent,
    MantenimientoFormComponent,
    VehiculoItemComponent,
    VehiculosComponent,
    FormularioComponent,
    MantenimientosComponent,
    MantenimientoItemComponent,
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatStepperModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [MatFormFieldModule, MatInputModule],
})
export class VehiculoModule {}
