import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaContactoPageRoutingModule } from './edita-contacto-routing.module';

import { EditaContactoPage } from './edita-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaContactoPageRoutingModule
  ],
  declarations: [EditaContactoPage]
})
export class EditaContactoPageModule {}
