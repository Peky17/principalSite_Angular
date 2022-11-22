import { Component } from '@angular/core';
import { UsersService } from "../../userServices/users.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string;
  password: string;
  tituloAlerta: string='';

   constructor(public userService: UsersService) {
     this.email = "";
     this.password = "";
   }

  login() {
    if(this.email != '' && this.password != ''){
      if(this.email != '' || this.password != ''){
        const user = {email: this.email, password: this.password};
          this.userService.login(user).subscribe( data => {
          // Informacion del usuario a loguear enviada
          console.log(data);
          // Guardar el token en una cookie
          this.userService.setToken(data.token);
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