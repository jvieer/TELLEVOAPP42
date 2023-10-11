import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarviajePage } from './tomarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: TomarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarviajePageRoutingModule {}
