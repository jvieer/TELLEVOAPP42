import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from './register.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // Agrega HttpClientModule aquí
    TranslateModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
