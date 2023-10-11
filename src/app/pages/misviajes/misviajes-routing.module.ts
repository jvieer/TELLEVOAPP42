import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisviajesPage } from './misviajes.page';

const routes: Routes = [
  {
    path: '',
    component: MisviajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisviajesPageRoutingModule {}
