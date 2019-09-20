import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    this.getIdRotaPai();
  }

  getIdRotaPai(): void {
    console.log('ID pai em como usar: ', this.route.parent.params.subscribe((parametro: any) => {
      this.comoUsarPorId(parametro.id);
      }));
  }

  comoUsarPorId(id: number): void {
    this.ofertasService.getComoUsarOfertaPorId(id).subscribe(comoUsar => {
      this.comoUsar = comoUsar.descricao;
      console.log(this.comoUsar);
    }, err => {
      console.log("Erro ao listar ofertas!");
    });
  }

}
