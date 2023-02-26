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
export class AgentecomercialService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient,  private auth: AuthService) { }

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'access-control-allow-origin': '*'
     })
  };

  postAddAgenteComercial(dni: any,apellidosnombres:any){
    const oParam: any = {
      dni: dni,
      apellidosnombres: apellidosnombres    
    };

    let obj = JSON.stringify(oParam);
    console.log(this.httpOptions);
    return this.http.post(`${this.baseUrl}/AgenteComercial/AddAgenteComercial`, obj, this.httpOptions);
  
  }

  postListAenteComercial(dni: any){
    const oParam: any = {
      dni: dni
     
    };

    let obj = JSON.stringify(oParam);
    console.log(this.httpOptions);
    return this.http.post(`${this.baseUrl}/AgenteComercial/ListAgentes`, obj, this.httpOptions);
  
  }
  
 
}
