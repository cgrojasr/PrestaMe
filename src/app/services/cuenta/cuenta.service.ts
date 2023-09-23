import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cuenta_item } from 'src/app/models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  url: string = "http://localhost:5116/api/cuenta/"

  constructor(
    private http: HttpClient
  ) { }

  ListarPorCliente(id_cliente: number){
    return this.http.get<cuenta_item[]>(`${this.url}`+`${id_cliente}`)
  }
}
