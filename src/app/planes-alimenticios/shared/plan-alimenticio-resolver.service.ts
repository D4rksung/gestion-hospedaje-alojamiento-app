import { PlanAlimenticioService } from './plan-alimenticio.service';
import { PlanAlimenticio } from './../../models/plan-alimenticio.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PlanAlimenticioResolver implements Resolve <PlanAlimenticio> {

  constructor(private planAlimenticioService: PlanAlimenticioService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = +route.params['id'];
    if(isNaN(id)){
      return new PlanAlimenticio();
    }
    return this.planAlimenticioService.getPlanAlimenticio(id)
    .map(planAlimenticio =>{
      if(planAlimenticio){
        return planAlimenticio;
      }
    })
  }

}
