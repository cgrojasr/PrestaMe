import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SeguridadRountingModule } from './seguridad-rounting.module';
import { SeguridadComponent } from './seguridad.component';
import { RecuperarUsuarioComponent } from '../seguridad/recuperar-usuario/recuperar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    SeguridadComponent,
    RecuperarUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SeguridadRountingModule
  ]
})
export class SeguridadModule { }
