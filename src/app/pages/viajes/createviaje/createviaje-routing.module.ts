import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import CreateviajePage from './createviaje.page';

const routes: Routes = [
  {
    path: '',
    component: CreateviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateviajePageRoutingModule {}
