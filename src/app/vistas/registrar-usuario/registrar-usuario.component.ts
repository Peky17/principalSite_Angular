import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})

export class RegistrarUsuarioComponent {
  nombre: string;
  apellidos: string;
  telefono: string;
  email: string;
  direccion: string;
  password: string;
  confirmarPassword: string;

  constructor() {
    this.nombre = "";
    this.apellidos = "";
    this.telefono = "";
    this.email = "";
    this.direccion = "";
    this.password = "";
    this.confirmarPassword = "";
  }

  registrar(){
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.telefono);
    console.log(this.email);
    console.log(this.direccion);
    console.log(this.password);
    console.log(this.confirmarPassword);
  }

}
