import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarconductorPageRoutingModule } from './eliminarconductor-routing.module';

import { EliminarconductorPage } from './eliminarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarconductorPageRoutingModule
  ],
  declarations: [EliminarconductorPage]
})
export class EliminarconductorPageModule {}
