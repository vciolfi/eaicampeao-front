import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required)
    });
  }

  public onSubmit() {
    if (this.registerForm!.get('password')!.value === this.registerForm!.get('repassword')!.value) {
      this.authenticationService.register(
        this.registerForm.get('username')!.value,
        this.registerForm.get('email')!.value,
        this.registerForm!.get('password')!.value
      );
    }
  }
}
