import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seguridad',
    pathMatch: 'full'
  },
  {
    path: 'seguridad',
    loadChildren: ()=>import('./seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path: 'comercial',
    loadChildren: ()=>import('./comercial/comercial.module').then(m=>m.ComercialModule)
  },
  {
    path: 'administrativo',
    loadChildren: ()=>import('./administrativo/administrativo.module').then(m=>m.AdministrativoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
