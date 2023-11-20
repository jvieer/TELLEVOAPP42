import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirconductorPageRoutingModule } from './elegirconductor-routing.module';

import { ElegirconductorPage } from './elegirconductor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirconductorPageRoutingModule,
    TranslateModule
  ],
  declarations: [ElegirconductorPage]
})
export class ElegirconductorPageModule {}
