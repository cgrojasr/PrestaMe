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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
