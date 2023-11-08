import { Component } from '@angular/core';
import { AuthenticationClientService } from './services/authentication-client.service';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'inicio', url: '/dashboard', icon: 'home' },
    { title: 'clientes', url: '/clientes', icon: 'people' },
    { title: 'fornecedores', url: '/fornecedores', icon: 'archive' },
    { title: 'produtos', url: '/produtos', icon: 'bag-handle' },
    { title: 'pedidos', url: '/pedidos', icon: 'receipt' },
  ];

  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout();
  }
}
