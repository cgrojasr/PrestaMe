import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { cuenta_item } from 'src/app/models/cuenta';

@Component({
  selector: 'app-cuenta-item',
  templateUrl: './cuenta-item.component.html',
  styleUrls: ['./cuenta-item.component.css']
})
export class CuentaItemComponent {
  @Input() objCuentaItem: cuenta_item = {
    id_cuenta: 0,
    numero_cuenta: '',
    saldo_disponible: 0
  }

  constructor(
    private router:Router
  ){}

  btnMovimientos_Click(id_cuenta:number):void{
    this.router.navigateByUrl("comercial/movimiento/"+id_cuenta)
  }
}
