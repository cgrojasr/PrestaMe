import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasaRango_activo } from 'src/app/models/tasa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasaService {

  constructor(
    private http: HttpClient
  ) { }

  Obtener_Tasa_Activo(){
    return this.http.get<TasaRango_activo>(`${environment.url}tasa`)
  }
}
