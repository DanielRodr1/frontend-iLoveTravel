import { Component} from '@angular/core';

interface Person {
  imagePerfil: string;
  name: string;
  lastName: string;
  description: string;
  country: string;
  city: string;
  language: string;
}

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})


export class PersonasComponent {

  searchForm: { pais: string; } = { pais: '',};

  people: Person [];

  filteredPeople : Person[];

  constructor() {
    this.people = [
      {
        imagePerfil:'assets/perfilSIT.png',
        name:'Daniel',
        lastName:'Rodriguez Alfaro',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country:'España',
        city:'Madrid',
        language:'Español'
      },
      {
        imagePerfil:'assets/perfilSIT.png',
        name:'Luis Guti',
        lastName:'Angulo Carrera',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country:'Peru',
        city:'El Porvenir',
        language:'Español'
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Julian',
        lastName: 'Kruszyn Alvarez',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Alemania',
        city: 'Munich',
        language: 'Español'
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Juan Francesco',
        lastName: 'Mendez Carrera',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Argentina',
        city: 'Nordelta',
        language: 'Español'
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Miguel Antonio',
        lastName: 'Martinez Suarez',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Uruguay',
        city: 'Montevideo',
        language: 'Español'
      }
    ];

    this.filteredPeople = []
  }

  buscarPersonas() {
    // Filtrar la lista de personas solo por el país y almacenar en filteredPeople
    this.filteredPeople = this.people.filter(person =>
      person.country.toLowerCase() === this.searchForm.pais.toLowerCase()
    );
  }

}
