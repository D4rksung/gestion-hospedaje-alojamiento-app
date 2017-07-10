import { CondicionMedica } from './../../models/condicion-medica.model';
import { Especie } from './../../models/especie.model';
import { Raza } from './../../models/raza.model';
import { FiltrosService } from './../../filtros.service';
import { PlanAlimenticioService } from './../shared/plan-alimenticio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanAlimenticio } from './../../models/plan-alimenticio.model';
import { AlimentosService } from './../../alimentos/alimentos.service';
import { Alimento } from './../../models/alimento.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gha-plan-alimenticio',
  templateUrl: './plan-alimenticio.component.html',
  styleUrls: ['./plan-alimenticio.component.css']
})
export class PlanAlimenticioComponent implements OnInit {

  title = 'Definir Plan Alimenticio';
  especies:Especie[];
  condicionesMedicas:CondicionMedica[] = [];
  razas:Raza[];

  @Input() planAlimenticio: PlanAlimenticio;

  constructor(private filtrosService: FiltrosService,
    private planAlimenticioService: PlanAlimenticioService,
    private route: ActivatedRoute,
    private router: Router) {
      this.especies = this.filtrosService.getEspecies();
    }

  ngOnInit() {
    this.route.data.subscribe((data: { planAlimenticio: PlanAlimenticio }) => {
      this.setPlanAlimenticio(data.planAlimenticio);
      this.condicionesMedicas = this.filtrosService.getCondicionesMedicas(this.planAlimenticio.especie);
    });
  }

  onchangeEspecie(especie: number){
    this.planAlimenticio.condicionMedica = -1;
    this.condicionesMedicas = especie>=0?this.filtrosService.getCondicionesMedicas(especie):[];
    this.razas=especie>=0?this.filtrosService.getRazas(especie):[];
  }

  setPlanAlimenticio(planAlimenticio:PlanAlimenticio){
    this.planAlimenticio = planAlimenticio;
  }

  guardar(){
    if(this.validarDatos()){
      if(this.planAlimenticio.id == null){
        this.planAlimenticioService.addPlanAlimenticio(this.planAlimenticio)
        .subscribe(p=>{
          this.gotoListaPlanesAlimenticios()
        });
      }else{
        this.planAlimenticioService.updatePlanAlimenticio(this.planAlimenticio)
        .subscribe(p=>{
          this.gotoListaPlanesAlimenticios();
        });
      }
    }
  }

  validarDatos(){
    let result = true;
    const {nombre,especie,condicionMedica,criterios,programacionesDia} = this.planAlimenticio;
    if(!(nombre && nombre.length)){
      result = false;
      alert('Debe ingresar un nombre');
    }else if(especie<0){
      result = false;
      alert('Debe seleccionar una especie');
    }else if(condicionMedica<0){
      result = false;
      alert('Debe seleccionar una condicionMedica');
    }else if(!(criterios && criterios.length)){
      result = false;
      alert('Debe ingresar por lo menos un criterio');
    }else{
      /*programacionesDia.forEach(p=>{
        if(!(p.comidas && p.comidas.length)){
          result = false;
          alert
        }else{
          p.comidas.forEach(c=>{

          });
        }
      });*/
    }
    if(!result){
      alert('Debe ingresar todos los campos solicitados');
    }
    return result;
  }

  cancelar(){
    this.gotoListaPlanesAlimenticios();
  }

  gotoListaPlanesAlimenticios(){
    this.router.navigate(['/planesAlimenticios']);
  }

}
