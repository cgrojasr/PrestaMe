import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumentoComboBox } from 'src/app/models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  

  constructor() { }

  ListarComboBox():Observable<TipoDocumentoComboBox[]>{
    let tipodocumento_combobox: TipoDocumentoComboBox[] = [
      {
        id_doc_identidad: 1,
        nombre: 'DNI - Documento Nacional de Identidad'
      }, 
      {
        id_doc_identidad: 2,
        nombre: 'CE - Carné de extranjería'
      }
    ]

    return new Observable( observer => {
      observer.next( tipodocumento_combobox )
      observer.complete()
    })
  }
}
