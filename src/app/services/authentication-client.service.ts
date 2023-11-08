import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClientService {

  private usuariosUrl = environment.url + '/usuario';

  constructor(private http: HttpClient) {
  }

  public getUsuarios = (): Observable<Usuarios[]> =>
    this.http.get<Usuarios[]>(this.usuariosUrl);

  private getUsuario = (id: string): Observable<Usuarios> =>
    this.http.get<Usuarios>(`${this.usuariosUrl}/${id}`);

  public login(usuarios: Usuarios[], email: string): Observable<Usuarios> {
    let user = usuarios.filter(usuario => usuario.email === email);
    return from(this.getUsuario(user[0].id));
  }

  public register = (username: string, email: string, password: string): Observable<string> =>
    this.http.post(this.usuariosUrl, { username: username, email: email, password: password }, { responseType: 'text' })
      .pipe(catchError(this.handleError));

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
