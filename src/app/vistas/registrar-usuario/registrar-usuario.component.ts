import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from "../../userServices/users.service";

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

  constructor(public userService: UsersService) {
    this.nombre = "";
    this.apellidos = "";
    this.telefono = "";
    this.email = "";
    this.direccion = "";
    this.password = "";
    this.confirmarPassword = "";
  }

  registrar(){
    if(this.password === this.confirmarPassword){
       const user = { nombre:this.nombre, apellidos:this.apellidos, telefono:this.telefono,
        email:this.email, direccion:this.direccion, password:this.password };
        // Mandamos el objeto a el servicio para hacer la peticion
        this.userService.register(user).subscribe(data => {
        console.log(data);
    });
    } else {
      Swal.fire('OPERACION DENEGADA', 'Las contraseñas no coinciden!', 'info');
    }
  }

}
