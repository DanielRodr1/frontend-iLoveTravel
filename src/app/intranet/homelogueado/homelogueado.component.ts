import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-homelogueado',
  templateUrl: './homelogueado.component.html',
  styleUrls: ['./homelogueado.component.scss'],
})
export class HomelogueadoComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/api/v1/article/viewPlaces';
  responseData: any;
  displayedData: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getDataFromApi();
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
}
