import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClienteLogin } from 'src/app/models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objClienteLogin: ClienteLogin = {
    id_cliente: 0,
    nombres: "",
    apellidos: ""
  }

  constructor(
    private router: Router,
    private cookies: CookieService
  ){}

  ngOnInit(): void {
    this.objClienteLogin = JSON.parse(this.cookies.get('clienteAuth')) 
  }
  
  btn_Aperturar_Cuenta():void{
    this.router.navigateByUrl("comercial/cuenta");
  }
}

