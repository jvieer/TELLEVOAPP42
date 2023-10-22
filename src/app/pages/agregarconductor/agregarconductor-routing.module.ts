import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarconductorPage } from './agregarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarconductorPageRoutingModule {}
