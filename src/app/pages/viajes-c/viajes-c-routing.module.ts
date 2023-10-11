import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ViajesCPage from './viajes-c.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesCPageRoutingModule {}
