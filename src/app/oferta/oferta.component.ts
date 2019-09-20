import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) {}

  ngOnInit() {
    this.roteamentoDeOfertasPorId();
  }

  roteamentoPorParametroSnapshot(): void {
    console.log(this.route.snapshot.params[':id']);
  }

  roteamentoPorParametroSubscribe(): void {
    this.route.params.subscribe((parametro: any) => {
      console.log(parametro.id);
    });
  }

  roteamentoDeOfertasPorId(): void {
    this.route.params.subscribe((parametro: any) => {
    this.ofertasPorId(parametro.id);
    });
  }

  ofertasPorId(id: number): void {
    this.ofertasService.getOfertasPorId(id).subscribe(oferta => {
      this.oferta = oferta;
      console.log(this.oferta);
    }, err => {
      console.log("Erro ao listar ofertas!");
    });
  }

}
