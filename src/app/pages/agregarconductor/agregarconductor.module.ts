import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarconductorPageRoutingModule } from './agregarconductor-routing.module';

import { AgregarconductorPage } from './agregarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarconductorPageRoutingModule
  ],
  declarations: [AgregarconductorPage]
})
export class AgregarconductorPageModule {}
