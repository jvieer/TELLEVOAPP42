import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Usuarios20PageRoutingModule } from './usuarios20-routing.module';

import { Usuarios20Page } from './usuarios20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Usuarios20PageRoutingModule
  ],
  declarations: [Usuarios20Page]
})
export class Usuarios20PageModule {}
