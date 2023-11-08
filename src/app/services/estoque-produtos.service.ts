import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstoqueProduto } from '../interface/estoque-produto';

@Injectable()
export class EstoqueProdutosService {
  private estoqueProdutosUrl = `${environment.url}/estoque`;

  constructor(private http: HttpClient) { }

  getEstoqueProdutos(): Observable<EstoqueProduto[]> {
    return this.http.get<EstoqueProduto[]>(this.estoqueProdutosUrl);
  }

  getEstoqueProduto(id: string): Observable<EstoqueProduto> {
    return this.http.get<EstoqueProduto>(`${this.estoqueProdutosUrl}/${id}`);
  }

  addEstoqueProduto = (estoqueProduto: EstoqueProduto): Observable<string> =>
    this.http.post(this.estoqueProdutosUrl, { estoqueProduto }, { responseType: 'text' })
      .pipe(catchError(this.handleError));

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
