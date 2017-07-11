import { PlanAlimenticio } from './../../models/plan-alimenticio.model';
import { CONFIG } from './../../core/config';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

const planesAlimenticiosUrl = CONFIG.baseUrls.planesAlimenticios;

@Injectable()
export class PlanAlimenticioService {
  constructor(private http: Http) { }

  getPlanesAlimenticios(){
    return <Observable<PlanAlimenticio[]>>this.http
    .get(planesAlimenticiosUrl)
    .map(res => this.extractData<PlanAlimenticio[]>(res));
  }

  getPlanAlimenticio(id: number){
    return <Observable<PlanAlimenticio>>this.http
    .get(`${planesAlimenticiosUrl}/${id}`)
    .map(res => this.extractData<PlanAlimenticio>(res))
    .catch(this.catchBadResponse);
  }

  getPlanesAlimenticiosWithFilter(params: URLSearchParams){
    return <Observable<PlanAlimenticio[]>>this.http
    .get(planesAlimenticiosUrl, {params})
    .map(res => this.extractData<PlanAlimenticio[]>(res));
  }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
    let err = res.json();
    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    return Observable.of(false);
  };

  addPlanAlimenticio(planAlimenticio:PlanAlimenticio){
    return <Observable<PlanAlimenticio>>this.http
      .post(`${planesAlimenticiosUrl}`, planAlimenticio)
      .map(res => this.extractData<PlanAlimenticio>(res));
  }

  updatePlanAlimenticio(planAlimenticio:PlanAlimenticio){
    return <Observable<PlanAlimenticio>>this.http
      .put(`${planesAlimenticiosUrl}/${planAlimenticio.id}`, planAlimenticio)
      .map(res => <PlanAlimenticio>res.json().data);
  }

  deletePlanAlimenticio(planAlimenticio:PlanAlimenticio){
    return <Observable<PlanAlimenticio>>this.http
      .delete(`${planesAlimenticiosUrl}/${planAlimenticio.id}`)
      .map(res => <PlanAlimenticio>res.json().data);
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }
}
