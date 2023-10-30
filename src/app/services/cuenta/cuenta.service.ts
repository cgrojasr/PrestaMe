import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaApertura, CuentaItem } from 'src/app/models/cuenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(
    private http: HttpClient
  ) { }

  ListarPorCliente(id_cliente: number){
    return this.http.get<CuentaItem[]>(`${environment.url}cuenta/`+`${id_cliente}`)
  }

  Registrar(objCuentaApertura: CuentaApertura){
    console.log('Llegue al servicio')
    return this.http.post<CuentaApertura>(`${environment.url}cuenta`, objCuentaApertura)
  }
}
