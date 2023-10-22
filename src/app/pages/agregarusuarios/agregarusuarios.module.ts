import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarusuariosPageRoutingModule } from './agregarusuarios-routing.module';

import { AgregarusuariosPage } from './agregarusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarusuariosPageRoutingModule
  ],
  declarations: [AgregarusuariosPage]
})
export class AgregarusuariosPageModule {}
