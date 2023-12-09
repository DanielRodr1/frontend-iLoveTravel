import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  onLoginClick(): void {
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const password = (document.getElementById('password') as HTMLInputElement)
      ?.value;

    const loginRequest = { email, password };

    this.httpClient
      .post('http://localhost:8080/api/v1/users/login', loginRequest)
      .subscribe(
        (response: any) => {
          console.log(response);
          if (response.token) {
            return this.router.navigate(['../homeLogueado']);
          }
          return alert('Usuario y/o contraseña incorrectas');
        },
        (error) => {
          console.error(error);

          if (error.status === 401) {
            alert('Usuario y/o contraseña incorrectas');
          }
        }
      );
  }
}
