import { Usuarios } from './../interface/usuarios';
import { Router } from '@angular/router';
import { AuthenticationClientService } from './authentication-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'token';

  constructor(
    private authenticationClient: AuthenticationClientService,
    private router: Router
  ) {}

  public login(users: Usuarios[],email: string): void {
    this.authenticationClient
      .login(users, email)
      .subscribe(token => {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
        this.router.navigate(['/']);
      },
      (err) => console.error(err)
      );
  }

  public register(username: string, email: string, password: string): void {
    this.authenticationClient.register(username, email, password).subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/']);
      });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
