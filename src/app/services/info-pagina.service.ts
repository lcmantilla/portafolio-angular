import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {

    console.log("Servico Pagina listo...");

    // Leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( ( resp: infoPagina ) => {
      this.cargada = true;
      this.info = resp;
      console.log( resp );

    })

  }
}
