import { Alimento } from '../models/alimento.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CONFIG } from '../core/config';

const alimentosUrl = CONFIG.baseUrls.alimentos;

export interface AlimentosState{
  loaded: boolean;
}

@Injectable()
export class AlimentosService {

  alimentos: Alimento[];
  private alimentosSubject = new Subject<AlimentosState>();
  alimentosState = this.alimentosSubject.asObservable();


  constructor(private http: Http) { }

  loadAlimentos(){
    this.http
    .get(alimentosUrl)
    .map(res => this.extractData<Alimento[]>(res))
    .subscribe(alimentos=>{
      this.alimentos = alimentos;
      this.alimentosSubject.next({loaded:true});
    });
  }

  getAlimentos(){
    return this.alimentos;
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}
