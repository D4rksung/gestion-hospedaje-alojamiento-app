import { Categoria, SubCategoria } from './models/alimento.model';
import { EtapaVida } from './models/etapa-vida.model';
import { NivelBMI } from './models/nivel-bmi.model';
import { Especie } from './models/especie.model';
import { CondicionMedica } from './models/condicion-medica.model';
import { Raza } from './models/raza.model';
import { CONFIG } from './core/config';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
let filtrosUrl = CONFIG.baseUrls.filtros;

interface Filtros{
  especies: Especie[];
  razas: Raza[];
  condicionesMedicas: CondicionMedica[],
  nivelesBMI: NivelBMI[],
  etapasVida: EtapaVida[],
  categorias: Categoria[],
  subCategorias: SubCategoria[]
}

export interface FiltrosState{
  loaded: boolean;
}

@Injectable()
export class FiltrosService {
  filtros: Filtros;
  private filtrosSubject = new Subject<FiltrosState>();
  filtrosState = this.filtrosSubject.asObservable();

  constructor(private http: Http) { }

  loadFiltros(){
    this.http.get(filtrosUrl)
    .map(res => this.extractData<Filtros>(res))
    .subscribe(filtros=>{
      this.filtros = filtros;
      this.filtrosSubject.next({loaded:true});
    });
  }

  getEspecies(){
    return this.filtros.especies;
  }

  getRazasFull(){
    return this.filtros.razas;
  }

  getRazas(especie: number){
    return this.filtros.razas.filter(r=>r.especie == especie);
  }

  getCondicionesMedicasFull(){
    return this.filtros.condicionesMedicas;
  }

  getCondicionesMedicas(especie: number){
    return this.filtros.condicionesMedicas.filter(c=>c.especies.includes(+especie));
  }

  getNivelesBMI(){
    return this.filtros.nivelesBMI;
  }

  getEtapasVida(){
    return this.filtros.etapasVida;
  }

  getCategorias(){
    return this.filtros.categorias;
  }

  getSubCategorias(categoria: number){
    return this.filtros.subCategorias.filter(s=>s.categoria = categoria);
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}
