import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Usuarios20Page } from './usuarios20.page';

const routes: Routes = [
  {
    path: '',
    component: Usuarios20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Usuarios20PageRoutingModule {}
