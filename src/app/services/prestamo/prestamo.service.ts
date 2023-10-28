import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestamoItem } from 'src/app/models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  url: string = "http://localhost:5116/api/cuenta/"
  constructor() { }

  ListarPorCliente(id_cliente: number):Observable<PrestamoItem[]>{
    let prestamos: PrestamoItem[] = [
      {
        id_cuenta: 1,
        numero_cuenta: '180-13215631-9-10',
        saldo_pendiente: 400
      },
      {
        id_cuenta: 4,
        numero_cuenta: '180-13211231-7-20',
        saldo_pendiente: 200
      },
      {
        id_cuenta: 3,
        numero_cuenta: '180-12123534-5-10',
        saldo_pendiente: 800
      }
    ]   
    return new Observable( observer => {
      observer.next( prestamos )
      observer.complete()
    })
  }

  BuscarPorId(id_prestamo: number): Observable<PrestamoItem>{
    let prestamo: PrestamoItem = {
      id_cuenta: 1,
        numero_cuenta: '180-13215631-9-10',
        saldo_pendiente: 400
    }

    return new Observable( observer => {
      observer.next( prestamo )
      observer.complete()
    })
  }
}
