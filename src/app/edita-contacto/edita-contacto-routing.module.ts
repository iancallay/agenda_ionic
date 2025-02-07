import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaContactoPage } from './edita-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: EditaContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaContactoPageRoutingModule {}
