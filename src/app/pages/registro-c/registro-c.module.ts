import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCPageRoutingModule } from './registro-c-routing.module';

import { RegistroCPage } from './registro-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCPageRoutingModule
  ],
  declarations: [RegistroCPage]
})
export class RegistroCPageModule {}
