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
  email: string;
  password: string;
  confirmarPassword: string;

  constructor(public userService: UsersService) {
    this.nombre = "";
    this.email = "";
    this.password = "";
    this.confirmarPassword = "";
  }

  registrar(){
    if(this.password === this.confirmarPassword){
       const user = { username:this.nombre, email: this.email, password: this.password, role: ["user"] };
        // Mandamos el objeto a el servicio para hacer la peticion
        this.userService.register(user).subscribe(data => {
            console.log(data);
            Swal.fire('AVISO', data.message, 'info');
        },
        error => {
          console.log(error);
          Swal.fire('OPERACION DENEGADA', 'Las contraseñas no coinciden!', 'info');
        });
    } else {
      Swal.fire('OPERACION DENEGADA', 'Las contraseñas no coinciden!', 'info');
    }
  }

}
