import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Place {
  name: string;
  country: string;
  description: string;
  image: string;
  tips: Tip[];
}

interface Tip {
  place: string;
  title: string;
  location: string;
  description: string;
  photo: string;
  type: string;
  ratings: number[];
}

@Component({
  selector: 'app-place-home',
  templateUrl: './place-home.component.html',
  styleUrls: ['./place-home.component.scss'],
})
export class PlaceHomeComponent implements OnInit {
  placeInfo: Place;

  constructor(private route: ActivatedRoute) {
    this.placeInfo = {
      name: 'París',
      country: 'Francia',
      description:
        '"París, la Ciudad de la Luz, donde la historia, la cultura ' +
        'y la belleza se entrelazan en un escenario inigualable."',
      image: 'assets/ParisPhoto.png',
      tips: [
        // ... Tus tips predeterminados aquí ...
      ],
    };
  }

  ngOnInit(): void {
    // Leer queryParams
    this.route.queryParams.subscribe((params) => {
      // Verificar si hay datos en queryParams
      if (params) {
        this.placeInfo = JSON.parse(params['placeInfo']);
      } else {
        this.placeInfo = {
          name: 'París',
          country: 'Francia',
          description:
            '"París, la Ciudad de la Luz, donde la historia, la cultura ' +
            'y la belleza se entrelazan en un escenario inigualable."',
          image: 'assets/ParisPhoto.png',
          tips: [
            // ... Tus tips predeterminados aquí ...
          ],
        };
      }
    });
  }

  activeCategory: string = 'food';

  selectCategory(category: string): void {
    this.activeCategory = category;
  }
}
