import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElimusuariosPageRoutingModule } from './elimusuarios-routing.module';

import { ElimusuariosPage } from './elimusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElimusuariosPageRoutingModule
  ],
  declarations: [ElimusuariosPage]
})
export class ElimusuariosPageModule {}
