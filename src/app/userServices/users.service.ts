import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: HttpClient) {

  }
  // Metodo de logueo
  login(user: Object): Observable<any> {
    /* Peticion mediante el metodo post para enviar los datos del usuario a loguear 
    (Se le envia el obejto con los datos contenidos)*/
    return this.http.post("https://reqres.in/api/login", user);
  }
}