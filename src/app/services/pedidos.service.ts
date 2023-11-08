import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Pedido } from '../interface/pedido';
import { environment } from 'src/environments/environment';

@Injectable()
export class PedidosService {
  private pedidosUrl = `${environment.url}/pedidos`;

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.pedidosUrl);
  }

  getPedido(id: string): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.pedidosUrl}/${id}`);
  }
}
