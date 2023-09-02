import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-gestionar',
  templateUrl: './cuenta-gestionar.component.html',
  styleUrls: ['./cuenta-gestionar.component.css']
})
export class CuentaGestionarComponent {
  /**
   *
   */
  constructor(
    private router: Router
  ) {
  }

  btnCancelar_OnClick(){
    this.router.navigateByUrl("comercial/home");
  }
}
