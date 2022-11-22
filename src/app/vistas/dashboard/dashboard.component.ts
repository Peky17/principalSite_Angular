import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/userServices/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public userService: UsersService, public router: Router){
    // Verificar si hay un usuario en sesion 
    if(this.userService.getToken() != ""){
    } else {
      console.log("Tramposito");
      this.router.navigateByUrl('ingresar');
    }
  }

  // Metodo para cerrar sesion
  logout(){
      this.userService.deleteToken();
      console.log("Ha cerrado sesion");
      this.router.navigateByUrl('ingresar');
  }
}
