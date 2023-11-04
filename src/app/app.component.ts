import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cliente', url: '/cliente', icon: 'people' },
    { title: 'Fornecedor', url: '/fornecedor', icon: 'archive' },
    { title: 'Produtos', url: '/produtos', icon: 'bag-handle' },
    { title: 'Pedidos', url: '/pedidos', icon: 'receipt' },
  ];
  constructor() {}
}
