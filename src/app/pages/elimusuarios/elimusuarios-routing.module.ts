import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElimusuariosPage } from './elimusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ElimusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElimusuariosPageRoutingModule {}
