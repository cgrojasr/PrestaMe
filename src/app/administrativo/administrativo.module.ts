import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrativoComponent } from './administrativo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdministrativoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    AdministrativoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdministrativoModule { }
