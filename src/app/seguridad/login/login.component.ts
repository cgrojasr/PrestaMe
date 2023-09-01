import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteAutenticar } from 'src/app/models/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  objClienteAutenticar: ClienteAutenticar = {
    id_cliente: 0,
    nombres: '',
    apellidos: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router
  ){}

  btnIngresar_OnClick():void{
    console.log("Estoy en el metodo click del boton")
    if(this.objClienteAutenticar.email === "pciscroj@upc.edu.pe" && this.objClienteAutenticar.password === "1"){
      this.objClienteAutenticar.id_cliente = 0;
      this.objClienteAutenticar.nombres = 'Christian';
      this.objClienteAutenticar.apellidos = 'Rojas';
      this.router.navigateByUrl("comercial/home")
    }
  }
}
