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
export class VentasService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient,  private auth: AuthService) { }

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'access-control-allow-origin': '*'
     })
  };

  postAddVentas(idvendedor: number,idagente:any,producto:any,monto:number){
    const oParam: any = {
      idvendedor: idvendedor,
      idagente: parseInt(idagente)   , 
      producto: producto,
      monto: Number(monto)    
    };

    let obj = JSON.stringify(oParam);
    console.log(obj);
    return this.http.post(`${this.baseUrl}/Ventas/AddVentas`, obj, this.httpOptions);
  
  }

  postVentas(vendedor:any){
    const oParam: any = {
      apellidosnombres: vendedor
    };

    let obj = JSON.stringify(oParam);
    console.log(this.httpOptions);
    return this.http.post(`${this.baseUrl}/Ventas/ListVentas`, obj, this.httpOptions);
  
  }

  
  
}
