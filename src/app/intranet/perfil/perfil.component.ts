import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  name="Daniel Alexander"
  lastName="Rodriguez Alfaro"
  dateMember = '23 de Noviembre del 2023'
  description="Siempre con una maleta lista para explorar nuevos horizontes, encontrar tesoros culturales y crear recuerdos en lugares lejanos."
  ubication="Australia"
  country="Perú"
  maritalStatuus="Soltero"
  dateBorn="15 de Mayo del 2024"
  gener="Masculino"
  imagePerfil='assets/perfilSIT.png'
  imagesPerson='assets/turista.png'
  imageItinerario='assets/Itinerario.png'
}
