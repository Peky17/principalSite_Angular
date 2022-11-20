import { Component } from '@angular/core';
import { UsersService } from "../../userServices/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string;
  password: string;

   constructor(public userService: UsersService) {
     this.email = "";
     this.password = "";
   }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      // Informacion del usuario a loguear enviada
      console.log(data);
    });
  }
}