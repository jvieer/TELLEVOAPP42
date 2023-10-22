import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarconductorPage } from './eliminarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarconductorPageRoutingModule {}
