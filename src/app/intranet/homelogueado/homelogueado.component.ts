import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelogueado',
  templateUrl: './homelogueado.component.html',
  styleUrls: ['./homelogueado.component.scss'],
})
export class HomelogueadoComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/api/v1/article/viewPlaces';
  responseData: any;
  displayedData: any;
  logueado: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.verificarTokenEnLocalStorage();
    if (!this.logueado) {
      this.router.navigate(['/']);
    } else {
      this.getDataFromApi();
    }
  }
  verificarTokenEnLocalStorage(): void {
    const token = localStorage.getItem('token');
    this.logueado = Boolean(token) && token != '';
  }

  getDataFromApi(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token.trim()}`,
        'Content-Type': 'application/json', // Puedes agregar otros encabezados según sea necesario
      });

      this.httpClient.get<any[]>(this.apiUrl, { headers }).subscribe(
        (response) => {
          // Asigna los datos recuperados a la variable
          this.responseData = response;
          // Asigna los datos a la variable que se mostrará en el HTML
          this.displayedData = this.responseData;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('No se encontró el token en localStorage.');
    }
  }
  cerrarSesion(): void {
    // Elimina el token del localStorage
    localStorage.removeItem('token');
    // Actualiza la variable logueado
    this.logueado = false;
    // Puedes realizar otras acciones, como redirigir a la página de inicio de sesión, etc.
  }
}
