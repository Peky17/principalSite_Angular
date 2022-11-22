import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VistaHomeComponent } from './vistas/vista-home/vista-home.component';
import { VistaAboutComponent } from './vistas/vista-about/vista-about.component';
import { VistaContactoComponent } from './vistas/vista-contacto/vista-contacto.component';
import { HabitacionesComponent } from './vistas/habitaciones/habitaciones.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarUsuarioComponent } from './vistas/registrar-usuario/registrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VistaHomeComponent,
    VistaAboutComponent,
    VistaContactoComponent,
    HabitacionesComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
