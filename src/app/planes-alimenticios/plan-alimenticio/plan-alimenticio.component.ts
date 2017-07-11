import { InformacionNutricionalService, AlimentosPlanState } from './../shared/informacion-nutricional.service';
import { Subscription } from 'rxjs/Subscription';
import { CondicionMedica } from './../../models/condicion-medica.model';
import { Especie } from './../../models/especie.model';
import { Raza } from './../../models/raza.model';
import { FiltrosService } from './../../filtros.service';
import { PlanAlimenticioService } from './../shared/plan-alimenticio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanAlimenticio } from './../../models/plan-alimenticio.model';
import { AlimentosService, AlimentosState } from './../../alimentos/alimentos.service';
import { Alimento } from './../../models/alimento.model';
import { Component, OnInit, Input} from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'gha-plan-alimenticio',
  templateUrl: './plan-alimenticio.component.html',
  styleUrls: ['./plan-alimenticio.component.css']
})
export class PlanAlimenticioComponent implements OnInit{

  alimentosLoaded:boolean = false;
  private alimentosStateChanged: Subscription;
  private alimentosPlanStateChanged: Subscription;

  title = 'Definir Plan Alimenticio';
  especies:Especie[];
  condicionesMedicas:CondicionMedica[] = [];
  razas:Raza[];

  @Input() planAlimenticio: PlanAlimenticio;

  constructor(private filtrosService: FiltrosService,
    private planAlimenticioService: PlanAlimenticioService,
    private alimentosService: AlimentosService,
    private informacionNutricionalService: InformacionNutricionalService,
    private route: ActivatedRoute,
    private router: Router) {
      this.especies = this.filtrosService.getEspecies();
    }

  ngOnInit() {
    this.alimentosService.loadAlimentos();
    this.alimentosStateChanged = this.alimentosService.alimentosState
    .subscribe((state:AlimentosState)=>{
      this.alimentosLoaded = state.loaded
    });
    this.alimentosPlanStateChanged = this.informacionNutricionalService.alimentosPlanState
    .subscribe((state:AlimentosPlanState)=>{
      this.informacionNutricionalService.loadFromPlanAlimenticio(this.planAlimenticio);
    });
    this.route.data.subscribe((data: { planAlimenticio: PlanAlimenticio }) => {
      this.setPlanAlimenticio(data.planAlimenticio);
      this.condicionesMedicas = this.filtrosService.getCondicionesMedicas(this.planAlimenticio.especie);
    });
    this.razas=this.filtrosService.getRazas(this.planAlimenticio.especie);
  }

  onchangeEspecie(especie: number){
    this.planAlimenticio.condicionMedica = -1;
    this.condicionesMedicas = especie>=0?this.filtrosService.getCondicionesMedicas(especie):[];
    if(especie<0){
      this.razas = [];
      this.planAlimenticio.criterios = [];
    }else{
      this.razas = this.filtrosService.getRazas(especie);
    }
  }

  setPlanAlimenticio(planAlimenticio:PlanAlimenticio){
    this.planAlimenticio = planAlimenticio;
  }

  guardar(){
    if(this.validarDatos()){
      let params = new URLSearchParams();
      params.set('nombre',this.planAlimenticio.nombre);
      this.planAlimenticioService.getPlanesAlimenticiosWithFilter(params)
      .subscribe(planesAlimenticios=> {
        if(planesAlimenticios && planesAlimenticios.length){
          alert('Ya existe un plan alimenticio con ese nombre');
        }else{
          if(this.planAlimenticio.id == null){
            this.planAlimenticioService.addPlanAlimenticio(this.planAlimenticio)
            .subscribe(p=>{
              alert(`Plan alimenticio "${p.nombre}" guardado exitosamente`);
              this.gotoListaPlanesAlimenticios()
            });
          }else{
            this.planAlimenticioService.updatePlanAlimenticio(this.planAlimenticio)
            .subscribe(p=>{
              alert(`Datos del plan alimenticio "${p.nombre}" fueron actualizados`);
              this.gotoListaPlanesAlimenticios();
            });
          }
        }
      });
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
      alert('Debe seleccionar una condición médica');
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
