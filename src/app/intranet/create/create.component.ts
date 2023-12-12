import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  crearLugar() {
    const apiUrl = 'http://localhost:8080/api/v1/article/create';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')?.trim()}`,
      'Content-Type': 'application/json',
    });

    const nuevoLugar = {
      place_name: (document.getElementById('place_name') as HTMLInputElement)
        .value,
      country: (document.getElementById('country') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement)
        .value,
      image: (document.getElementById('image') as HTMLInputElement).value,
      city: (document.getElementById('place_name') as HTMLInputElement).value,
    };

    this.httpClient.post(apiUrl, nuevoLugar, { headers }).subscribe(
      (response: any) => {
        // Realizar acciones adicionales si es necesario
        // ...
        // Configurar los datos que deseas enviar como headers
      },
      (error: any) => {
        if (error.status == 201) {
          const placeInfoHeader = {
            name: nuevoLugar.place_name,
            country: nuevoLugar.country,
            city: nuevoLugar.city,
            description: nuevoLugar.description,
            image: nuevoLugar.image,
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
        console.error('Error al llamar a la API:', error);
      }
    );
  }
}
