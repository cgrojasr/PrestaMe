import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cliente, ClienteLogin } from 'src/app/models/cliente';
import { CuentaApertura, CuentaItem } from 'src/app/models/cuenta';
import { TasaRango_activo } from 'src/app/models/tasa';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';
import { TasaService } from 'src/app/services/tasa/tasa.service';

@Component({
  selector: 'app-cuenta-gestionar',
  templateUrl: './cuenta-gestionar.component.html',
  styleUrls: ['./cuenta-gestionar.component.css']
})
export class CuentaGestionarComponent implements OnInit {
  objCliente: Cliente = {
    id_cliente: 0,
    nombres: '',
    apellidos: '',
    fecha_nacimiento: new Date(),
    email: '',
    numero_doc_identidad: '',
    id_doc_identidad: 0
  }

  tasa_rango: TasaRango_activo = {
    tasa_minimo: 0, 
    tasa_maximo: 0,
    id_tasa_rango: 0
  }

  objCuentaItem: CuentaItem = {
    id_cuenta: 0,
    numero_cuenta: '',
    saldo_disponible: 0
  }

  objCuentaApertura: CuentaApertura = {
    id_cliente: 0,
    id_tipo_cuenta: 1,
    numero_cuenta: '',
    id_cuenta: 0,
    saldo_disponible:0
  }

  valor: number = 0;
  valor_maximo: number = 1000;
  valor_minimo: number = 100;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private tasaService: TasaService,
    private cookies: CookieService,
    private cuentaService: CuentaService
  ) {
  }

  ngOnInit(): void {
    this.Obtener_TasaRango();
    let objClienteAuth: ClienteLogin = JSON.parse(this.cookies.get('clienteAuth'));
    /* this.clienteService.BuscarPorId(objClienteAuth.id_cliente).subscribe(
      result =>{
        this.objCliente = result
      }
    ); */
    this.objCuentaApertura.id_cliente = objClienteAuth.id_cliente
  }

  yourMethod(value: string){
    this.valor = +value
  }

  btnAperturaCuenta_OnClick() {
    console.log('Antes de leer la lista de cuentas')
    // let lstCuentaItems: CuentaItem[];
    // lstCuentaItems = JSON.parse(localStorage.getItem('lstCuentaItems') || '') ;

    console.log('Estoy en el metodo antes de registrar')
    this.cuentaService.Registrar(this.objCuentaApertura).subscribe(
      result=>{
        this.objCuentaApertura = result

        // this.objCuentaItem.id_cuenta = 999,
        // this.objCuentaItem.numero_cuenta = '190-0000004-9-99'
        // this.objCuentaItem.saldo_disponible = 0  

        // lstCuentaItems.push(this.objCuentaItem);
        // localStorage.removeItem('lstCuentaItems')
        // localStorage.setItem('lstCuentaItems', JSON.stringify(lstCuentaItems));

        this.router.navigateByUrl('comercial/home');
      }
    );
  }

  btnCancelar_OnClick(){
    this.router.navigateByUrl("comercial/home");
  }

  Obtener_TasaRango():void {
    this.tasaService.Obtener_Tasa_Activo().subscribe(
      result=>{
        this.tasa_rango = result
      }
    )
  }
}
