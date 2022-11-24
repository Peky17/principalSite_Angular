import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  // Metodo de logueo
  login(user: Object): Observable<any> {
    /* Peticion mediante el metodo post para enviar los datos del usuario a loguear 
    (Se le envia el obejto con los datos contenidos)*/
     return this.http.post("http://localhost:8090/api/auth/signin", user); 
  }
  // Metodo de registro de usuarios
  register(user: Object): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
  // Metodos para el manejo de cookies
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  deleteToken(){
    this.cookies.delete("token");
    return this.http.post("http://localhost:8090/api/auth/signout", "Bye"); 
  }
}