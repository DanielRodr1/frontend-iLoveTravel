import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/api/v1/users/profile';
  userName: string = '';

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerPerfilUsuario();
  }

  obtenerPerfilUsuario(): void {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && email) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token.trim()}`,
        'Content-Type': 'application/json',
      });

      this.httpClient
        .get<any>(this.apiUrl, { headers, params: { email } })
        .subscribe(
          (response) => {
            this.userName = response['Sesion iniciada Bienvenido ->'];
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      console.error('No se encontró el token o el correo en localStorage.');
    }
  }
}
