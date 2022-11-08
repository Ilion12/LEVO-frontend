import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministradorComponent } from "../administrador/administrador/administrador.component";
import { AppComponent } from "../app.component";
import { UsuarioComponent } from "../usuario/usuario/usuario.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path:'inicio',
component: AppComponent},
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
