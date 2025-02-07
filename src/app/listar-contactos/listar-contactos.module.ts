import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarContactosPageRoutingModule } from './listar-contactos-routing.module';

import { ListarContactosPage } from './listar-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarContactosPageRoutingModule
  ],
  declarations: [ListarContactosPage]
})
export class ListarContactosPageModule {}
