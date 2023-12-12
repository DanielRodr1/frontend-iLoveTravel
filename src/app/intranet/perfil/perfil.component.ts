import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  name = 'Daniel Alexander Rodriguez Alfaro';
  lastName = '';
  dateMember = '23 de Noviembre del 2023';
  description =
    'Siempre con una maleta lista para explorar nuevos horizontes, encontrar tesoros culturales y crear recuerdos en lugares lejanos.';
  ubication = 'Australia';
  country = 'Perú';
  maritalStatuus = 'Soltero';
  dateBorn = '15 de Mayo del 2024';
  gener = 'Masculino';
  imagePerfil = 'assets/perfilSIT.png';
  imagesPerson = 'assets/turista.png';
  imageItinerario = 'assets/Itinerario.png';
  imageFondo = 'assets/fondo-perfil.png';
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
            const profileInfo = response['Acerca de'];
            this.name = profileInfo['Nombre Completo'];
            this.country = profileInfo['Nacionalidad'];
            this.dateBorn = new Date(
              profileInfo['Fecha de Cumpleaños']
            ).toLocaleDateString();
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
