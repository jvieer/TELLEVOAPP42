import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleusuariosPage } from './detalleusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleusuariosPageRoutingModule {}
