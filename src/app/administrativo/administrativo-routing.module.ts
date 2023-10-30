import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativoComponent } from './administrativo.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrativoComponent,
    children: [
      {
        path: '',
        redirectTo: 'cliente',
        pathMatch: 'full',
      },
      {
        path: 'cliente',
        component: ClienteComponent
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
export class AdministrativoRoutingModule { }
