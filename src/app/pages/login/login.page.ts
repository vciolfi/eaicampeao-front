import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interface/usuarios';
import { AuthenticationClientService } from 'src/app/services/authentication-client.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm!: FormGroup;
  private usuarios: Usuarios[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private authenticationClientService: AuthenticationClientService) {}

  ngOnInit() {
    this.getUsers();
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public getUsers() {
    // this.authenticationClientService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.usuarios, this.loginForm.get('email')!.value);
    }
  }
}
