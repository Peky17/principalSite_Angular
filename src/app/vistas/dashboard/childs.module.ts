import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildsRoutingModule } from './childs-routing.module';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { MisReservacionesComponent } from './mis-reservaciones/mis-reservaciones.component';


@NgModule({
  declarations: [
    ReservacionComponent,
    MisReservacionesComponent
  ],
  imports: [
    CommonModule,
    ChildsRoutingModule
  ]
})
export class ChildsModule { }
