import { CriterioSeleccion } from './../../../models/criterio-seleccion.model';
import { Component, OnInit, Input} from '@angular/core';

const defaultSeleccion = {raza: -1, nivelBMI: -1, etapaVida: -1};

@Component({
  selector: 'gha-criterios-seleccion',
  templateUrl: './criterios-seleccion.component.html',
  styleUrls: ['./criterios-seleccion.component.css']
})
export class CriteriosSeleccionComponent implements OnInit {

  @Input() criterios: CriterioSeleccion[];

  seleccion = defaultSeleccion;

  especies = [{
    id: 1,
    nombre: 'perro'
  }, {
    id: 2,
    nombre: 'gato'
  }];

  razas = [{
    id: 1,
    nombre: 'pequinez'
  }, {
    id: 2,
    nombre: 'shitzu'
  }];

  niveles_bmi = [{
    id: 1,
    nombre: 'bajo peso'
  },
  {
    id: 2,
    nombre: 'peso normal'
  },
  {
    id: 3,
    nombre: 'sobre peso'
  }];

  etapas_vida= [
    {
      id: 1,
      nombre: 'cachorro'
    },
    {
      id: 2,
      nombre: 'adulto'
    },
    {
      id: 3,
      nombre: 'senior'
    }
  ];

  constructor() {  }

  ngOnInit() {
  }

  agregarCriterio() {
    let {raza, nivelBMI, etapaVida} = this.seleccion;
    const criterio:CriterioSeleccion = {raza,nivelBMI,etapaVida};
    if (this.existeCriterio(criterio)){
      console.log('Ya existe criterio');
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
