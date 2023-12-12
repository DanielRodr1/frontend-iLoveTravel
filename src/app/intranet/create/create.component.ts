import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importa NgForm
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  // Elimina las propiedades individuales si decides usar NgForm
  // place_name: string = '';
  // country: string = '';
  // description: string = '';
  // image: string = '';

  constructor(private httpClient: HttpClient, private router: Router) {}

  // Cambia el parámetro de la función para que sea un NgForm
  crearLugar() {
    const apiUrl = 'http://localhost:8080/api/v1/article/create';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')?.trim()}`,
      'Content-Type': 'application/json', // Puedes agregar otros encabezados según sea necesario
    });
    const nuevoLugar = {
      place_name: (document.getElementById('place_name') as HTMLInputElement)
        .value,
      country: (document.getElementById('country') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement)
        .value,
      image: (document.getElementById('image') as HTMLInputElement).value,
      city: (document.getElementById('country') as HTMLInputElement).value,
    };

    this.httpClient.post(apiUrl, nuevoLugar, { headers }).subscribe(
      (response: any) => {},
      (error: any) => {
        if (error.status == 201) {
          this.router.navigate(['/intranet/lugares']);
        }
        if (error.error != undefined) alert(error.error);
        console.error('Error al llamar a la API:', error);
      }
    );
  }
}
