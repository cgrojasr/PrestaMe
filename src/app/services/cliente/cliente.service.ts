import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteAutenticar, ClienteLogin } from 'src/app/models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  Autenticar(cliente_autenticar: ClienteAutenticar) : Observable<ClienteLogin>{
    return this.http.post<ClienteLogin>(`${environment.url}cliente`, cliente_autenticar);
  }

  BuscarPorId(id_cliente: number){
    return this.http.get<Cliente>(`${environment.url}cliente/`+id_cliente);
  }

  Registrar(cliente: Cliente):Observable<Cliente>{
    cliente.id_cliente = 1
    return new Observable( observer => {
      observer.next( cliente )
      observer.complete()
    })
  }

  Modificar(cliente: Cliente):Observable<Cliente>{
    return new Observable( observer => {
      observer.next( cliente )
      observer.complete()
    })
  }
}
