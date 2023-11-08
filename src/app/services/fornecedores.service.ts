import { Fornecedor } from './../interface/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class FornecedoresService {
  private fornecedoresUrl = `${environment.url}/fornecedores`;

  constructor(private http: HttpClient) { }

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedoresUrl);
  }

  getFornecedore(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.fornecedoresUrl}/${id}`);
  }
}
