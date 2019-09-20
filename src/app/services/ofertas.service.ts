import { HttpClient, HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { URL_API_OFERTA } from '../apis/oferta.api';
import { URL_API_OFERTA_COMO_USAR } from '../apis/oferta.api';
import { URL_API_OFERTA_ONDE_FICA } from '../apis/oferta.api';
import { Observable, from } from 'rxjs';

@Injectable()
export class OfertasService {

    // tslint:disable-next-line: deprecation
    constructor(private http: Http, private httpClient: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(URL_API_OFERTA)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }

    public getOfertasNews(): Observable<any> {
        return this.httpClient.get(URL_API_OFERTA);
    }

    public getOfertasPorCategoria(categoria: string): Observable<any> {
        return this.httpClient.get(`${URL_API_OFERTA}?categoria=${categoria}`);
    }

    public getOfertasPorId(id: number): Observable<any> {
        return this.httpClient.get(`${URL_API_OFERTA}/${id}`);
    }

    public getComoUsarOfertaPorId(id: number): Observable<any> {
        return this.httpClient.get(`${URL_API_OFERTA_COMO_USAR}/${id}`);
    }

    public getOndeFicaOfertaPorId(id: number): Observable<any> {
        return this.httpClient.get(`${URL_API_OFERTA_ONDE_FICA}/${id}`);
    }
}
