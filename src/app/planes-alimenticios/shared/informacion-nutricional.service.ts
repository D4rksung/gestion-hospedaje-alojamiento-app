import { Subscription } from 'rxjs/Subscription';
import { AlimentosService, AlimentosState } from './../../alimentos/alimentos.service';
import { Alimento } from './../../models/alimento.model';
import { COMPONENTES } from './../../models/componente.model';
import { PlanAlimenticio } from './../../models/plan-alimenticio.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface InformacionNutricional{
  nombre: string;
  total: number;
};

export interface AlimentosPlanState{
  changed: boolean;
}

export interface InformacionNutricionalState{
  mapComposicion: Map<number, InformacionNutricional>;
}

@Injectable()
export class InformacionNutricionalService{

  private alimentosPlanSubject = new Subject<AlimentosPlanState>();
  private informacionNutricionalSubject = new Subject<InformacionNutricionalState>();
  alimentosPlanState = this.alimentosPlanSubject.asObservable();
  informacionNutricionalState = this.informacionNutricionalSubject.asObservable();

  allAlimentos: Alimento[];
  alimentosPlan: Alimento[];

  constructor(private alimentosService: AlimentosService) {}

  updateAlimentos(){
    this.alimentosPlanSubject.next({changed:true});
  }

  loadFromPlanAlimenticio(planAlimenticio: PlanAlimenticio){
    this.allAlimentos = this.alimentosService.getAlimentos();
    this.alimentosPlan = [];
    planAlimenticio.programacionesDia.forEach(p => {
      p.comidas.forEach(c => {
        this.allAlimentos.forEach(a => {
          if(c.alimentos.includes(a.id)) {
            this.alimentosPlan.push(a);
          }
        });
      });
    });

    let total = 0;
    let composicionMap: Map<number, InformacionNutricional> = new Map();
    COMPONENTES.forEach(c => {
      composicionMap.set(c.codigo, {nombre: c.nombre, total: 0});
    });

    this.alimentosPlan.forEach(a => {
      a.composicion.forEach(tc => {
        tc.componentes.forEach(c => {
          composicionMap.get(tc.id).total += c.cantidad;
          total += c.cantidad;
        });
      });
    });

    this.informacionNutricionalSubject.next({mapComposicion:composicionMap});
  }

}
