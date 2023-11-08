import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Pedido } from '../interface/pedido';
import { Produto } from '../interface/produto';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProdutosService {
  private produtosUrl = `${environment.url}/produtos`;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl);
  }

  getProduto(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.produtosUrl}/${id}`);
  }
}
