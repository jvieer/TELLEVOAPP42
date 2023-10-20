import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

interface RickMortyData {
  name: string;
  image: string;
  gender: string;
  location: { name: string };
}

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage implements OnInit {
  perfilData: RickMortyData;

  constructor(private http: HttpClient) {
    this.perfilData = {} as RickMortyData;
  }

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character')
      .pipe(
        catchError(() => {
          // Manejar errores aquí si es necesario
          return [];
        })
      )
      .subscribe((data: any) => {
        // Obtén un personaje aleatorio de la lista de personajes
        const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];

        this.perfilData.name = randomCharacter.name;
        this.perfilData.image = randomCharacter.image;
        this.perfilData.gender = randomCharacter.gender;
        this.perfilData.location = { name: randomCharacter.location.name };
      });
  }
}
