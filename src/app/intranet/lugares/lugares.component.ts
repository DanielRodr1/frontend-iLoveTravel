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
  mostrarDetallesPlace(place: any): void {
    const placeInfoHeader = {
      name: place.city,
      country: place.country,
      city: place.city,
      description: place.description,
      image:
        'https://media.istockphoto.com/id/539115110/es/foto/colosseum-in-rome-italy-y-sol-de-la-ma%C3%B1ana.jpg?s=612x612&w=0&k=20&c=S2BE7bvASd4hm6Yp0VbtvaGnnqTR4p5HJ-6RfDjR-MQ=',
    };
    // Configurar la navegación con los datos de lugar como headers
    const navigationExtras = {
      queryParams: {
        placeInfo: JSON.stringify(placeInfoHeader),
      },
    };

    // Navegar a la ruta /intranet/place-home con los datos de lugar como headers
    this.router.navigate(['/intranet/placeHome'], navigationExtras);
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
