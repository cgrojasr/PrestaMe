import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cuenta_item } from 'src/app/models/cuenta';

@Component({
  selector: 'app-cuenta-gestionar',
  templateUrl: './cuenta-gestionar.component.html',
  styleUrls: ['./cuenta-gestionar.component.css']
})
export class CuentaGestionarComponent {
  objCuentaItem: cuenta_item = {
    id_cuenta: 0,
    numero_cuenta: '',
    saldo_disponible: 0
  }
  constructor(
    private router: Router
  ) {
  }

  btnAperturaCuenta_OnClick() {
    console.log('Inicio de apertura')
    let lstCuentaItems: cuenta_item[];
    lstCuentaItems = JSON.parse(localStorage.getItem('lstCuentaItems') || '') ;

    this.objCuentaItem.id_cuenta = 999,
    this.objCuentaItem.numero_cuenta = '190-0000004-9-99'
    this.objCuentaItem.saldo_disponible = 0

    lstCuentaItems.push(this.objCuentaItem);
    localStorage.removeItem('lstCuentaItems')
    localStorage.setItem('lstCuentaItems', JSON.stringify(lstCuentaItems));

    console.log(lstCuentaItems)
    console.log('Final de apertura')
    this.router.navigateByUrl('comercial/home');
  }

  btnCancelar_OnClick(){
    this.router.navigateByUrl("comercial/home");
  }
}
