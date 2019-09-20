import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  
  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasPorRestaurante();
  }

  ofertasPorRestaurante(){
    this.ofertasService.getOfertasPorCategoria('restaurante').subscribe(ofertas => {
      this.ofertas = ofertas;
      console.log(this.ofertas);
    }, err => {
      console.log("Erro ao listar ofertas!");
    });
  }

}
