import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { deprecate } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.listarOfertas();
  }

  listarOfertas() {
    this.ofertasService.getOfertasNews().subscribe(ofertas => {
      this.ofertas = ofertas;
    }, err => {
      console.log("Erro ao listar ofertas!");
    });
  }

  listarOfertasDepreciado(){
    this.ofertasService.getOfertas()
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    })
    .catch(( param: any ) => {
      console.log(param);
    });
  }

}
