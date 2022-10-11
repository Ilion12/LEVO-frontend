import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdministradorModule } from './administrador/administrador.module';
import { UsuarioModule } from './usuario/usuario.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';import { HttpClientModule } from '@angular/common/http';
HttpClientModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CoreModule, FontAwesomeModule, AdministradorModule, UsuarioModule, VehiculoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
