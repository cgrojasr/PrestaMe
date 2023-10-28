import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ClienteLogin } from 'src/app/models/cliente';
import { CuentaItem } from 'src/app/models/cuenta';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';

@Component({
  selector: 'app-cuenta-listar',
  templateUrl: './cuenta-listar.component.html',
  styleUrls: ['./cuenta-listar.component.css']
})
export class CuentaListarComponent implements OnInit {

  constructor(
    private cuentaService: CuentaService,
    private cookies: CookieService
  ){}
  lstCuentaItems: CuentaItem[] = []

  ngOnInit(): void {
    let clienteLogin: ClienteLogin = JSON.parse(this.cookies.get('clienteAuth'))
    this.cuentaService.ListarPorCliente(clienteLogin.id_cliente).subscribe(
      result => {
        this.lstCuentaItems = result
      }
    )
  }
}
