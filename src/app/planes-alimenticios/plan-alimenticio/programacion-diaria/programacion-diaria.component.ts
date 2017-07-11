import { InformacionNutricionalService } from './../../shared/informacion-nutricional.service';
import { Component, OnInit, Input } from '@angular/core';
import {NgbTabChangeEvent, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import { ProgramacionDia } from './../../../models/programacion-dia.model';

@Component({
  selector: 'gha-programacion-diaria',
  templateUrl: './programacion-diaria.component.html',
  styleUrls: ['./programacion-diaria.component.css']
})
export class ProgramacionDiariaComponent implements OnInit {
  @Input() programacionesDia: ProgramacionDia[];
  lastTab:number = 1;
  quitarTab: boolean;

  constructor(private informacionNutricionalService: InformacionNutricionalService) { }

  ngOnInit() {
  }

  public beforeChange($event: NgbTabChangeEvent,ts:NgbTabset) {
    if(!this.quitarTab){
      if ($event.nextId === 'add-day') {
        $event.preventDefault();
        let num = this.programacionesDia.length+1;
        this.programacionesDia.push({numeroDia:num,comidas:[]});
        let lastTabId = `dia${this.lastTab}`;
        ts.select(lastTabId);
        this.lastTab = num;
        this.informacionNutricionalService.updateAlimentos();
      }
    }else{
      $event.preventDefault();
      this.quitarTab = false;
    }
  };

  public quitarProgramacionDia($event,idxProgramacionDia:number){
    $event.preventDefault();
    this.quitarTab = true;
    if(this.programacionesDia[idxProgramacionDia].comidas.length
    && !confirm('¿Está seguro que desea quitar el día de la programación?')){
      return;
    }
    this.informacionNutricionalService.updateAlimentos();
    this.programacionesDia.splice(idxProgramacionDia,1);
    this.programacionesDia.forEach((p, i) =>{
      if(i >= idxProgramacionDia){
        p.numeroDia = i + 1;
      }
    });
  }

}
