import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService) { }

  ngOnInit() {
    this.getIdRotaPai();
  }

  getIdRotaPai(): void {
    console.log('ID pai em como usar: ', this.route.parent.params.subscribe((parametro: any) => {
      this.ondeFicaPorId(parametro.id);
      }));
  }

  ondeFicaPorId(id: number): void {
    this.ofertasService.getOndeFicaOfertaPorId(id).subscribe(ondeFica => {
      this.ondeFica = ondeFica.descricao;
      console.log(this.ondeFica);
    }, err => {
      console.log("Erro ao listar ofertas!");
    });
  }
}
