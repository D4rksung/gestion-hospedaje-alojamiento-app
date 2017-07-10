import { ProgramacionDia } from './../../models/programacion-dia.model';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gha-informacion-nutricional',
  templateUrl: './informacion-nutricional.component.html',
  styleUrls: ['./informacion-nutricional.component.css']
})
export class InformacionNutricionalComponent implements OnInit, OnChanges {

  @Input() programacionesDia:ProgramacionDia[];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes && changes.programacionesDia){
      console.log(changes);
    }
  }

}
