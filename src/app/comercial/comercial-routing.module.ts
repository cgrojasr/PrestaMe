import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComercialComponent } from './comercial.component';
import { HomeComponent } from './home/home.component';
import { CuentaMovimientoComponent } from './cuenta-movimiento/cuenta-movimiento.component';
import { CuentaGestionarComponent } from './cuenta-gestionar/cuenta-gestionar.component';

const routes: Routes = [
  {
    path: '',
    component: ComercialComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'movimiento/:id_cuenta',
        component: CuentaMovimientoComponent
      },
      {
        path: 'cuenta',
        component: CuentaGestionarComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComercialRoutingModule { }
