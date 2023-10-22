import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateviajePageRoutingModule } from './createviaje-routing.module';
import { CreateViajePage } from './createviaje.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateviajePageRoutingModule
  ],
  declarations: [CreateViajePage]
})
export class CreateviajePageModule {}
