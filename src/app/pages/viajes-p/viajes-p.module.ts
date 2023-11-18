import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesPPageRoutingModule } from './viajes-p-routing.module';

import ViajesPPage from './viajes-p.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesPPageRoutingModule,
    TranslateModule
  ],
  declarations: [ViajesPPage]
})
export class ViajesPPageModule {}
