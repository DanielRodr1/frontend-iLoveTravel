import { Component } from '@angular/core';

interface Place {
  name: string;
  country: string;
  description: string;
  image: string;
  tips: Tip[]
}

interface Tip {
  place: string
  title: string
  location: string
  description: string
  photo: string
  type: string
  ratings: number[]
}

@Component({
  selector: 'app-place-home',
  templateUrl: './place-home.component.html',
  styleUrls: ['./place-home.component.scss']
})
export class PlaceHomeComponent {
  name = 'París'
  country= 'Francia'
  description = '"París, la Ciudad de la Luz, donde la historia, la cultura ' +
    'y la belleza se entrelazan en un escenario inigualable."'
  image = 'assets/ParisPhoto.png'

  tips: Tip[] = [
    {
      place: 'París',
      title: 'Le Jules Verne',
      location: 'Torre Eiffel, Champ de Mars, 5 Avenue Anatole France',
      description: 'Restaurante icónico ubicado en uno de los monumentos más emblemáticos de París.\n' +
        'El restaurante toma su nombre del famoso escritor de ciencia ficción Jules Verne y\n' +
        'ofrece una experiencia gastronómica excepcional con una vista panorámica impresionante.',
      photo: 'assets/tip1.png',
      type: 'food',
      ratings: [],
    },
    {
      place: 'París',
      title: 'Le Comptoir du Relais',
      location: 'Ubicación: 9 Carrefour de l\'Odéon',
      description: 'Restaurante icónico ubicado en uno de los monumentos más emblemáticos de París. ' +
        'El restaurante toma su nombre del famoso escritor de ciencia ficción Jules Verne y ofrece una experiencia ' +
        'gastronómica excepcional con una vista panorámica impresionante.',
      photo: 'assets/tip2.png',
      type: 'food',
      ratings: [],
    },
    {
      place: 'París',
      title: 'Kimpton St Honoré Paris(HOTEL)',
      location: 'Ubicación: 9 Carrefour de l\'Odéon',
      description: 'Restaurante icónico ubicado en uno de los monumentos más emblemáticos de París. ' +
        'El restaurante toma su nombre del famoso escritor de ciencia ficción Jules Verne y ofrece una experiencia ' +
        'gastronómica excepcional con una vista panorámica impresionante.',
      photo: 'assets/tip2.png',
      type: 'hotel',
      ratings: [],
    },
    {
      place: 'París',
      title: 'Hotele Paris(HOTEL)',
      location: 'Ubicación: 9 Carrefour de l\'Odéon',
      description: 'Restaurante icónico ubicado en uno de los monumentos más emblemáticos de París. ' +
        'El restaurante toma su nombre del famoso escritor de ciencia ficción Jules Verne y ofrece una experiencia ' +
        'gastronómica excepcional con una vista panorámica impresionante.',
      photo: 'assets/tip1.png',
      type: 'hotel',
      ratings: [],
    }
  ]

  activeCategory: string = 'food';

  selectCategory(category: string): void {
    this.activeCategory = category;
  }

}
