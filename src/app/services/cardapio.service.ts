import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cardapio } from '../interface/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private cardapioUrl = `${environment.url}/cardapio`;
  private headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "Accept": "application/json",
  };

  constructor(private http: HttpClient) { }

  getCardapios(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(this.cardapioUrl);
  }

  getCardapio(id: string): Observable<Cardapio> {
    return this.http.get<Cardapio>(`${this.cardapioUrl}/${id}`);
  }

  addCardapio = (cardapio: Cardapio): Observable<Cardapio> =>
    this.http.post<Cardapio>(this.cardapioUrl, cardapio, { headers: this.headers })
      .pipe(catchError(this.handleError));

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
