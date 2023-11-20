import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarviajePageRoutingModule } from './tomarviaje-routing.module';

import { TomarviajePage } from './tomarviaje.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarviajePageRoutingModule,
    TranslateModule
  ],
  declarations: [TomarviajePage]
})
export class TomarviajePageModule {}
