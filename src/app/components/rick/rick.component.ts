import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})

export class RickComponent implements OnInit {
  listaPersonajes: any[] = [];
  nextPage: string = '';
  prevPage: string = '';

  constructor(private rickService: RickAndMortyService) {}

  ngOnInit(): void {
    this.buscoPersonajes();
  }

  buscoPersonajes() {
    this.rickService.getCharacters('', '',).subscribe(data => {
      this.actualizaPropiedades(data);
      console.log(data);
    });
  }

  irA(pagina: string) {
    this.rickService.irAPagina(pagina).subscribe(data => {
      this.actualizaPropiedades(data);
    });
  }

  actualizaPropiedades(data: any) {
    this.listaPersonajes = data.results;
    this.nextPage = data.info.next ? data.info.next : '';
    this.prevPage = data.info.prev ? data.info.prev : '';
  }
}
