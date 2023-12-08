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
          // Aquí puedes manejar la respuesta de la API, por ejemplo, redirigir al usuario a la página de inicio
          console.log(response);
          this.router.navigate(['../homeLogueado']);
        },
        (error) => {
          // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
          console.error(error);
        }
      );
  }
}
