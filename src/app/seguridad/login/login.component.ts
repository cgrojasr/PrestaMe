import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClienteAutenticar, ClienteLogin } from 'src/app/models/cliente';

// Para utilizar las cookies hemos ejecutado el siguiente comando en el terminal
// npm install ngx-cookie-service --save

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objClienteLogin: ClienteLogin = {
    id_cliente: -1
  }

  isSubmitted = false;

  constructor(
    private router: Router,
    private cookies: CookieService,
    private fb: FormBuilder
  ){}

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
    // if(this.cookies.get('clienteAuth') !== ''){
      // this.objClienteLogin = JSON.parse(this.cookies.get('clienteAuth'));
      // if(this.objClienteLogin.sesion){
      //   this.router.navigateByUrl("home");
      // }
    // } else {
      // localStorage.clear();
    // }
  }

  btnIngresar_OnClick():void{
    this.isSubmitted = true;
    if(!this.authForm.invalid){
      if(this.authForm.value.email === "pciscroj@upc.edu.pe" && this.authForm.value.password === "1"){
        this.objClienteLogin.id_cliente = 1;
        let date: Date = new Date();
        this.cookies.set('clienteAuth', JSON.stringify(this.objClienteLogin), date.getTime() + 1 * 24 * 60 * 60 * 1000);
        this.router.navigateByUrl("comercial/home")
      }
    }
  }
}
