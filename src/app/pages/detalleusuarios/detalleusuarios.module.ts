import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleusuariosPageRoutingModule } from './detalleusuarios-routing.module';

import { DetalleusuariosPage } from './detalleusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleusuariosPageRoutingModule
  ],
  declarations: [DetalleusuariosPage]
})
export class DetalleusuariosPageModule {}
