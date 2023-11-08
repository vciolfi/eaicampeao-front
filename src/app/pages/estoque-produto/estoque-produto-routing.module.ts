import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoqueProdutoPage } from './estoque-produto.page';

const routes: Routes = [
  {
    path: '',
    component: EstoqueProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoqueProdutoPageRoutingModule {}
