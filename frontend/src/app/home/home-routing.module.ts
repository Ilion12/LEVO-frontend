import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministradorComponent } from "../administrador/administrador/administrador.component";
import { UsuarioComponent } from "../usuario/usuario/usuario.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "administrador",
    component: AdministradorComponent,
  },
  {
    path: "usuario",
    component: UsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
