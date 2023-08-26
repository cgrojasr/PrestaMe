import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SeguridadRountingModule } from './seguridad-rounting.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SeguridadRountingModule
  ]
})
export class SeguridadModule { }
