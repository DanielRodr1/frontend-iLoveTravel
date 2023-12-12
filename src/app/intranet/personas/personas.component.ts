import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  imagePerfil: string;
  name: string;
  lastName: string;
  description: string;
  country: string;
  city: string;
  language: string;
  nationality?: string;
}

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  searchForm: { pais: string } = { pais: '' };

  people: Person[];

  filteredPeople: Person[];

  constructor(private httpClient: HttpClient, private router: Router) {
    this.people = [
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Daniel',
        lastName: 'Rodriguez Alfaro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'España',
        city: 'Madrid',
        language: 'Español',
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Luis Guti',
        lastName: 'Angulo Carrera',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Peru',
        city: 'El Porvenir',
        language: 'Español',
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Julian',
        lastName: 'Kruszyn Alvarez',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Alemania',
        city: 'Munich',
        language: 'Español',
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Juan Francesco',
        lastName: 'Mendez Carrera',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Argentina',
        city: 'Nordelta',
        language: 'Español',
      },
      {
        imagePerfil: 'assets/perfilSIT.png',
        name: 'Miguel Antonio',
        lastName: 'Martinez Suarez',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
        country: 'Uruguay',
        city: 'Montevideo',
        language: 'Español',
      },
    ];

    this.filteredPeople = [];
  }
  private apiUrl = 'http://localhost:8080/api/v1/users/profiles';
  responseData: any;
  displayedData: any;
  logueado: boolean = false;

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
          console.log(response);
          this.people = response.map((person) => {
            return {
              ...person,
              imagePerfil: 'assets/perfilSIT.png',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dolorum facere minima neque praesentium sint. Alias delectus, exercitationem impedit nesciunt sed velit. Aliquam incidunt mollitia nobis quia recusandae, reiciendis.',
            };
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('No se encontró el token en localStorage.');
    }
  }
  buscarPersonas() {
    // Filtrar la lista de personas solo por el país y almacenar en filteredPeople
    this.filteredPeople = this.people.filter(
      (person) =>
        person.nationality?.toLowerCase() === this.searchForm.pais.toLowerCase()
    );
  }
}
