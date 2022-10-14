import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministradorModule } from '../administrador/administrador.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { VehiculoModule } from '../vehiculo/vehiculo.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, AdministradorModule, UsuarioModule, VehiculoModule
  ]
})
export class HomeModule { }
