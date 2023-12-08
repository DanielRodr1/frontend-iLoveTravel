import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  onRegisterClick(): void {
    const firstName = (document.getElementById('name') as HTMLInputElement)
      .value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement)
      .value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    const repeatPassword = (
      document.getElementById('repeatPassword') as HTMLInputElement
    ).value;
    const nationality = (
      document.getElementById('countries') as HTMLSelectElement
    ).value;
    const birthdate = (document.getElementById('birthDate') as HTMLInputElement)
      .value;

    // Validar aquí si las contraseñas coinciden u otras validaciones necesarias

    const user = {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
      nationality,
      birthdate,
    };

    this.httpClient
      .post('http://localhost:8080/api/v1/users/register', user)
      .subscribe(
        (response: any) => {
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
