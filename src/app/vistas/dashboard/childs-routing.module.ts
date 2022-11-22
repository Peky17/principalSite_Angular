import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MisReservacionesComponent } from './mis-reservaciones/mis-reservaciones.component';
import { ReservacionComponent } from './reservacion/reservacion.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'reservacion', component: ReservacionComponent},
      {path: 'reservaciones', component: MisReservacionesComponent}
    ] 
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildsRoutingModule { }
