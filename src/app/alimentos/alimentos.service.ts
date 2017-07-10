import { Alimento } from '../models/alimento.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CONFIG } from '../core/config';

const alimentosUrl = CONFIG.baseUrls.alimentos;

@Injectable()
export class AlimentosService {

  constructor(private http: Http) { }

  getAlimentos(){
    return <Observable<Alimento[]>>this.http
    .get(alimentosUrl)
    .map(res => this.extractData<Alimento[]>(res));
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}
