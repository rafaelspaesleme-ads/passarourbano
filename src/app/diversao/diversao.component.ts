import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasPorDiversao();
  }

  ofertasPorDiversao() {
    this.ofertasService.getOfertasPorCategoria('diversao').subscribe(ofertas => {
      this.ofertas = ofertas;
      console.log(this.ofertas);
    }, err => {
      console.log("Erro ao listar ofertas!");
    });
  }

}
