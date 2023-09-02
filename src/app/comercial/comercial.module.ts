import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComercialRoutingModule } from './comercial-routing.module';
import { ComercialComponent } from './comercial.component';
import { CuentaMovimientoComponent } from './cuenta-movimiento/cuenta-movimiento.component';
import { SharedModule } from '../shared/shared.module';
import { CuentaListarComponent } from './cuenta-listar/cuenta-listar.component';
import { PrestamoListarComponent } from './prestamo-listar/prestamo-listar.component';
import { FormsModule } from '@angular/forms';
import { CuentaItemComponent } from './cuenta-item/cuenta-item.component';
import { CuentaGestionarComponent } from './cuenta-gestionar/cuenta-gestionar.component';
import { PrestamoGestionarComponent } from './prestamo-gestionar/prestamo-gestionar.component';



@NgModule({
  declarations: [
    HomeComponent,
    ComercialComponent,
    CuentaMovimientoComponent,
    CuentaListarComponent,
    PrestamoListarComponent,
    CuentaItemComponent,
    CuentaGestionarComponent,
    PrestamoGestionarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComercialRoutingModule,
    SharedModule
  ]
})
export class ComercialModule { }
