import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCPage } from './registro-c.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCPageRoutingModule {}
