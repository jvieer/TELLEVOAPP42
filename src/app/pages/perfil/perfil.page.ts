import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

interface SwapiData {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
  image: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage implements OnInit {
  swapiData: SwapiData;

  constructor(private http: HttpClient) {
    this.swapiData = {} as SwapiData;
  }

  ngOnInit() {
    this.http.get('https://swapi.dev/api/people/')
      .pipe(
        catchError(() => {
          // Manejar errores aquí si es necesario
          return [];
        })
      )
      .subscribe((data: any) => {
        // Obtén un personaje aleatorio de la lista de personajes
        const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];

        this.swapiData.name = randomCharacter.name;
        this.swapiData.height = randomCharacter.height;
        this.swapiData.mass = randomCharacter.mass;
        this.swapiData.gender = randomCharacter.gender;
        this.swapiData.homeworld = randomCharacter.homeworld;

        // Obtén el nombre del planeta de origen
        this.http.get(randomCharacter.homeworld).subscribe((homeworldData: any) => {
          this.swapiData.homeworld = homeworldData.name;
        });

        // Establece una imagen predeterminada de Star Wars (puedes buscar imágenes relacionadas en línea)
        this.swapiData.image = 'URL_de_la_imagen'; // Reemplaza 'URL_de_la_imagen' con la URL de una imagen
      });
  }
}
