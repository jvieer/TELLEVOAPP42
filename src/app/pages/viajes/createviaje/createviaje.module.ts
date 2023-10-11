import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateviajePageRoutingModule } from './createviaje-routing.module';

import CreateviajePage from './createviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateviajePageRoutingModule
  ],
  declarations: [CreateviajePage]
})
export class CreateviajePageModule {}
