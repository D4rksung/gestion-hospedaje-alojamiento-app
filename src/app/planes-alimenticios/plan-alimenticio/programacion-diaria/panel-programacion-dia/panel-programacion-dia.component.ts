import { InformacionNutricionalService } from './../../../shared/informacion-nutricional.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProgramacionDia } from './../../../../models/programacion-dia.model';
import { Comida, TipoComida } from './../../../../models/comida.model';

@Component({
  selector: 'gha-panel-programacion-dia',
  templateUrl: './panel-programacion-dia.component.html',
  styleUrls: ['./panel-programacion-dia.component.css']
})
export class PanelProgramacionDiaComponent implements OnInit {

  @Input() programacionDia:ProgramacionDia;

  comidas = [{
    tipo: TipoComida.Desayuno,
    nombre: "desayuno",
    abreviatura: "d",
    active: false
  }, {
    tipo: TipoComida.Almuerzo,
    nombre: "almuerzo",
    abreviatura: "a",
    active: false
  }, {
    tipo: TipoComida.Cena,
    nombre: "cena",
    abreviatura: "c",
    active: false
  }];

  constructor(private informacionNutricionalService: InformacionNutricionalService) { }

  ngOnInit() {
    let comidas = this.programacionDia.comidas;
    let tipos = Array.from(new Set(comidas.map(c=>c.tipo)));
    if(tipos.length){
      this.comidas.forEach(c=>c.active=tipos.includes(c.tipo));
    }
  }

  actualizarEstadoComida(estado:boolean, tipo:TipoComida){
    let comidasProgramadas = this.programacionDia.comidas;
    let comida = this.comidas.find(c=>c.tipo == tipo);
    if(estado){
      comidasProgramadas.push({tipo,alimentos:[]});
      comida.active = estado;
    }else{
      let comidaProgramada=comidasProgramadas.find(c=>c.tipo==tipo);
      comidasProgramadas.splice(comidasProgramadas.indexOf(comidaProgramada),1);
      comida.active = estado;
    }
    this.informacionNutricionalService.updateAlimentos();
  }

  getAlimentosFromComida(comida){
    let comidas = this.programacionDia.comidas;
    return comidas.find(c=>c.tipo == comida.tipo).alimentos;
  }

}
