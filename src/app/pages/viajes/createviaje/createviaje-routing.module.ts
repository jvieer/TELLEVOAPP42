import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateViajePage } from './createviaje.page';



const routes: Routes = [
  {
    path: '',
    component: CreateViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateviajePageRoutingModule {}
