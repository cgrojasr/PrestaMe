import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ClienteLogin } from 'src/app/models/cliente';
import { cuenta_item } from 'src/app/models/cuenta';
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
  lstCuentaItems: cuenta_item[] = []

  // lstCuentaItems: cuenta_item[] = [
  //   {
  //     id_cuenta: 1,
  //     numero_cuenta: '100-11111111-0-11',
  //     saldo_disponible: 200.00
  //   },
  //   {
  //     id_cuenta: 2,
  //     numero_cuenta: '100-11111111-0-22',
  //     saldo_disponible: 500.00
  //   },
  //   {
  //     id_cuenta: 3,
  //     numero_cuenta: '100-11111111-0-33',
  //     saldo_disponible: 1000.00
  //   }
  // ]

  ngOnInit(): void {
    let clienteLogin: ClienteLogin = JSON.parse(this.cookies.get('clienteAuth'))
    this.cuentaService.ListarPorCliente(clienteLogin.id_cliente).subscribe(
      result => {
        this.lstCuentaItems = result
      }
    )
    // if(localStorage.getItem('lstCuentaItems') !== '') {
    //   console.log('Seteando arreglo')
    //   this.lstCuentaItems = JSON.parse(localStorage.getItem('lstCuentaItems') || '')
    //   console.log(this.lstCuentaItems)
    // } else {
    //   localStorage.setItem('lstCuentaItems', JSON.stringify(this.lstCuentaItems))
    // }
  }
}
