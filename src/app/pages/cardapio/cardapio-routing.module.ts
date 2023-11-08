import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioPage } from './cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioPage
  },
  {
    path: ':id',
    component: CardapioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioPageRoutingModule {}
