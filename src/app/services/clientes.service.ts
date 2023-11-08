import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Client } from '../interface/cliente';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientesService {
  private clientesUrl = `${environment.url}/clientes`;

  constructor(private http: HttpClient) { }

  getClientes = (): Observable<Client[]> =>
    this.http.get<Client[]>(this.clientesUrl);

  getCliente = (id: string): Observable<Client> =>
    this.http.get<Client>(`${this.clientesUrl}/${id}`);
}
