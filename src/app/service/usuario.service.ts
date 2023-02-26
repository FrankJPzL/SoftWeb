import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, empty, of, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { E_Usuario } from '../models/usuario.model';
import { Token } from '@angular/compiler';
import { E_Token } from '../models/tokenn.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient,  private auth: AuthService) { }

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'access-control-allow-origin': '*'
     })
  };

  // tslint:disable-next-line: ban-types
  private readonly HTTPOptionsResponse: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text'
  };
  

  errorHandler(error: HttpErrorResponse) {
    return from<any>([null]);
  }

  postLoginUsuario(usuario: any, clave:any,apellidos:any,idUsuario:number,
    objToken: E_Token,){
    const oParam: any = {
      usuario: usuario,
      clave: clave,
      apellidosNombres: apellidos,
      idUsuario: idUsuario,
      token: objToken,
    };

    let obj = JSON.stringify(oParam);
    console.log(this.httpOptions);
    return this.http.post(`${this.baseUrl}/Seguridad/Login`, obj, this.httpOptions);
   /* try {
      /*return this.http.post<any>(
        `${this.baseUrl}/Seguridad/Login`,
        obj,
        this.HTTPOptionsResponse
      ).pipe(catchError(this.errorHandler));*/
     /* return this.http.post(`${this.baseUrl}/Seguridad/Login`, obj, this.httpOptions);
    } catch (ex) {
      return from<any>([null]);
    }*/
  }


}
