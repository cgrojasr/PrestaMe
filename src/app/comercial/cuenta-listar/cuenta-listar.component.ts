import { Component } from '@angular/core';
import { cuenta_item } from 'src/app/models/cuenta';

@Component({
  selector: 'app-cuenta-listar',
  templateUrl: './cuenta-listar.component.html',
  styleUrls: ['./cuenta-listar.component.css']
})
export class CuentaListarComponent {
  lstCuentaItems: cuenta_item[] = [
    {
      id_cuenta: 1,
      numero_cuenta: '100-11111111-0-11',
      saldo_disponible: 200.00
    },
    {
      id_cuenta: 2,
      numero_cuenta: '100-11111111-0-22',
      saldo_disponible: 500.00
    },
    {
      id_cuenta: 3,
      numero_cuenta: '100-11111111-0-33',
      saldo_disponible: 1000.00
    }
  ]
}
