import { CriterioSeleccion } from './../../../models/criterio-seleccion.model';
import { FiltrosService } from './../../../filtros.service';
import { Component, OnInit, Input} from '@angular/core';

const defaultSeleccion = {raza: -1, nivelBMI: -1, etapaVida: -1};

@Component({
  selector: 'gha-criterios-seleccion',
  templateUrl: './criterios-seleccion.component.html',
  styleUrls: ['./criterios-seleccion.component.css']
})
export class CriteriosSeleccionComponent implements OnInit {

  @Input() razas;
  @Input() criterios: CriterioSeleccion[];

  seleccion = defaultSeleccion;

  niveles_bmi;
  etapas_vida;

  constructor(private filtrosService: FiltrosService) {

  }

  ngOnInit() {
    this.niveles_bmi = this.filtrosService.getNivelesBMI();
    this.etapas_vida = this.filtrosService.getEtapasVida();
  }

  agregarCriterio() {
    let {raza, nivelBMI, etapaVida} = this.seleccion;
    const criterio:CriterioSeleccion = {raza,nivelBMI,etapaVida};
    if (this.existeCriterio(criterio)){
      alert('Ya existe criterio con esa combinación');
    } else {
      this.criterios.push(criterio);
    }
  }

  existeCriterio(criterio:CriterioSeleccion){
    return !!this.criterios.find(c=>{
      return c.etapaVida== criterio.etapaVida
      && c.nivelBMI == criterio.nivelBMI
      && c.etapaVida == criterio.etapaVida;
    });
  }

  quitarCriterio(idxCriterio: number) {
    this.criterios.splice(idxCriterio, 1);
  }

  getNombreRaza(id:number){
    return this.razas.find(r=>r.id==id).nombre;
  }

  getNombreNivelBMI(id:number){
    return this.niveles_bmi.find(n=>n.id==id).nombre;
  }

  getNombreEtapaVida(id:number){
    return this.etapas_vida.find(e=>e.id==id).nombre;
  }

}
