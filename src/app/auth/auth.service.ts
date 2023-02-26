import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getToken(): string {
    let token = localStorage.getItem('token')!;
   return token;
  }

  public getDatosUsuario():any{
    let usuario = localStorage.getItem('usuario');
    if(usuario == null){
        return '---';
    } else {
        return JSON.parse(usuario);
       
    }
  }
}
