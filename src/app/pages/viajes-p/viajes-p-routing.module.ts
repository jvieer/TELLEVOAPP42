import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ViajesPPage from './viajes-p.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesPPageRoutingModule {}
