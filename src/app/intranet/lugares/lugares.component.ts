import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss'],
})
export class LugaresComponent implements OnInit {
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
          this.responseData = response;
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
}
