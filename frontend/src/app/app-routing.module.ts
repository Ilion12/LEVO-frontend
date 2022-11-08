import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { AuthGuard } from "./service/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {path:"administrador",
  loadChildren:()=> import("./administrador/administrador.module").then(m=> m.AdministradorModule),
  canActivate:[AuthGuard],
  data:{role:'ADMIN'}},
  
  {path:"usuario",
  loadChildren:()=> import("./usuario/usuario.module").then(m=> m.UsuarioModule),
  canActivate:[AuthGuard],
    data:{role:'USER'}
},
{
    path: "not-found",
    component: NotFoundComponent,
},
{
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
