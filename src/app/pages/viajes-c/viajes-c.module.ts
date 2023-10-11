import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesCPageRoutingModule } from './viajes-c-routing.module';

import ViajesCPage from './viajes-c.page';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesCPageRoutingModule
  ],
  declarations: [ViajesCPage,CardComponent]
})
export class ViajesCPageModule {}
