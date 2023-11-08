import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'inicio', url: '/dashboard', icon: 'home' },
    { title: 'cardapio', url: '/cardapio', icon: 'book' },
    { title: 'clientes', url: '/clientes', icon: 'people' },
    { title: 'fornecedores', url: '/fornecedores', icon: 'archive' },
    { title: 'estoque produtos', url: '/estoque', icon: 'bag-handle' },
    { title: 'pedidos', url: '/pedidos', icon: 'receipt' },
  ];

  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout();
  }
}
