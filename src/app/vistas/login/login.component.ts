import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../../userServices/users.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string;
  password: string;
  tituloAlerta: string='';

   constructor(public userService: UsersService, public router: Router) {
    // Inicializamos las variables 
    this.username = "";
    this.password = "";
    // Verificar si ya hay un usuario logueado mediante la cookie
    if(this.userService.getToken() != ''){
      this.router.navigateByUrl('dashboard');
    }
   }

  login() {
    if(this.username != '' && this.password != ''){
      if(this.username != '' || this.password != ''){
        const user = {username: this.username, password: this.password};
          this.userService.login(user).subscribe( data => {
          // Informacion del usuario a loguear enviada
          console.log(data);
          // Verificar que solo puedan acceder usuarios
            // Guardar datos del usuario en una cookie
            this.userService.setToken(data.id);
            this.userService.setUsername(data.username);
            this.userService.setEmail(data.email);
            // Redireccionamos al dashboard
            this.router.navigateByUrl('dashboard');
        },
        error => {
          console.log(error);
          Swal.fire('ACCESO DENEGADO', 'Datos erroneos o el usuario no existe', 'info');
        });
      } else {
        Swal.fire('OPERACION DENEGADA', 'Porfavor complete el formulario!', 'info');
      }
    } else {
      Swal.fire('OPERACION DENEGADA', 'Porfavor complete el formulario!', 'info');
    }
  }
}