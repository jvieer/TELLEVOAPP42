import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarusuariosPage } from './agregarusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarusuariosPageRoutingModule {}
