import { Subscription } from 'rxjs/Subscription';
import { InformacionNutricional, InformacionNutricionalService, InformacionNutricionalState } from './../shared/informacion-nutricional.service';
import { COMPONENTES } from './../../models/componente.model';
import { Alimento } from './../../models/alimento.model';
import { AlimentosService } from './../../alimentos/alimentos.service';
import { ProgramacionDia } from './../../models/programacion-dia.model';
import { Component, OnInit, AfterViewChecked, Input, SimpleChanges, ViewEncapsulation, ViewChild } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';

declare let d3: any;

interface PieChartData{
  key: string;
  y: number;
}

@Component({
  selector: 'gha-informacion-nutricional',
  templateUrl: './informacion-nutricional.component.html',
  styleUrls: ['./informacion-nutricional.component.css',
    '../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class InformacionNutricionalComponent implements OnInit, AfterViewChecked{

  @Input() programacionesDia: ProgramacionDia[];
  pieChart: NvD3Component;
  options;
  data;
  allAlimentos: Alimento[];
  alimentosPlan: Alimento[] = [];
  private informacionNutricionalStateChanged: Subscription;
  firstTime: boolean = true;

  constructor(private alimentosService: AlimentosService, private informacionNutricionalService: InformacionNutricionalService) {
    this.allAlimentos = this.alimentosService.getAlimentos();
  }

  @ViewChild('pieChart')
  set pieChartRef(ref:any){
    console.log(ref);
    this.pieChart = ref;
  }


  ngOnInit() {
    this.options = {
        chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key},
        y: function(d){return d.y},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    this.data = [];
    this.informacionNutricionalStateChanged = this.informacionNutricionalService.informacionNutricionalState
    .subscribe((state:InformacionNutricionalState)=>{
      this.onUpdateInfoNutricional(state);
    });

  }

  ngAfterViewChecked(){
    if(this.firstTime){
      this.informacionNutricionalService.updateAlimentos();
      this.firstTime = false;
    }
  }

  onUpdateInfoNutricional(state:InformacionNutricionalState){
    console.log('actualizar grafico');
    let total = 0;
    let composicionMap = state.mapComposicion;

    this.data=[];
    composicionMap.forEach((v,k) => {
      console.log(`${k} : ${JSON.stringify(v)}`);
      this.data.push({key: v.nombre, y: v.total});
    });

    if(this.pieChart) {
      this.pieChart.updateWithData(this.data);
    }
  }

}
