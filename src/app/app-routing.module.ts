import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { HabitacionesComponent } from "./vistas/habitaciones/habitaciones.component";
import { LoginComponent } from "./vistas/login/login.component";
import { RegistrarUsuarioComponent } from "./vistas/registrar-usuario/registrar-usuario.component";
import { VistaAboutComponent } from "./vistas/vista-about/vista-about.component";
import { VistaContactoComponent } from "./vistas/vista-contacto/vista-contacto.component";
import { VistaHomeComponent } from "./vistas/vista-home/vista-home.component";

const app_routes: Routes= [
  { path: '', component: VistaHomeComponent },
  { path: 'about', component: VistaAboutComponent },
  { path: 'contacto', component: VistaContactoComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'registrar', component: RegistrarUsuarioComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule ({
  imports: [
    RouterModule.forRoot(app_routes, {useHash: true})
  ], exports: [
      RouterModule
  ] 
})

export class AppRoutingModule {
  
}