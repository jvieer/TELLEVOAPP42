import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirconductorPage } from './elegirconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirconductorPageRoutingModule {}
