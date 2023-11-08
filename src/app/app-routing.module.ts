import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'fornecedores',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/fornecedor/fornecedor.module').then( m => m.FornecedorPageModule)
  },
  {
    path: 'estoque',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/estoque-produto/estoque-produto.module').then( m => m.EstoqueProdutoPageModule)
  },
  {
    path: 'pedidos',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cardapio',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cardapio/cardapio.module').then( m => m.CardapioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
