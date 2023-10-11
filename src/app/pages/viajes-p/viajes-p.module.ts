import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesPPageRoutingModule } from './viajes-p-routing.module';

import ViajesPPage from './viajes-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesPPageRoutingModule
  ],
  declarations: [ViajesPPage]
})
export class ViajesPPageModule {}
