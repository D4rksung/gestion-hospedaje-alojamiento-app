import { FiltrosService } from './../../../../../filtros.service';
import { Alimento, Categoria, SubCategoria} from './../../../../../models/alimento.model';
import { AlimentosService } from './../../../../../alimentos/alimentos.service';
import { Component, OnInit, Input} from '@angular/core';
import {NgDataGridModel} from 'angular2-datagrid';

class SeleccionAlimento extends Alimento{
  selected: boolean = false;
}

@Component({
  selector: 'gha-panel-seleccion-alimentos',
  templateUrl: './panel-seleccion-alimentos.component.html',
  styleUrls: ['./panel-seleccion-alimentos.component.css']
})
export class PanelSeleccionAlimentosComponent implements OnInit{
  @Input() alimentos: number[];
  alimentosTable:NgDataGridModel<Alimento>  = new NgDataGridModel<Alimento>([]);
  seleccionTable:NgDataGridModel<SeleccionAlimento>  = new NgDataGridModel<SeleccionAlimento>([]);
  allAlimentos:Alimento[]=[];
  filtros={categoria:-1,subcategoria:-1};

  categorias: Categoria[];
  subcategorias: SubCategoria[];

  constructor(private filtrosService: FiltrosService,private alimentoService: AlimentosService) {
    this.categorias = this.filtrosService.getCategorias();
  }

  ngOnInit() {
    this.getAlimentos();
  }

  onchangeCategoria(categoria: number){
    this.filtros.subcategoria = -1;
    this.subcategorias = categoria>=0?this.filtrosService.getSubCategorias(categoria):[];
    this.filtrarAlimentos();
  }

  getAlimentos(){
    this.alimentoService.getAlimentos()
    .subscribe(alimentos=>{
      this.allAlimentos = alimentos;
      alimentos.forEach(a=>{
        if(this.alimentos.includes(a.id)){
          this.alimentosTable.items.push(a);
        }
      });
      this.filtrarAlimentos();
    });
  }

  filtrarAlimentos(){
    this.seleccionTable = new NgDataGridModel<SeleccionAlimento>([]);
    this.allAlimentos.filter(a=>{
      let {categoria, subcategoria} = this.filtros;
      let valid = !this.alimentos.includes(a.id);
      if(categoria < 0){
        return valid && (subcategoria < 0);
      }else if (subcategoria < 0){

        return this.subcategorias.map(s=>s.id).includes(a.subCategoria);
      }
      return valid && a.subCategoria== subcategoria;
    })
    .forEach(a=>this.seleccionTable.items.push({...a, selected: false}));
  }

  agregarAlimentos(alimento:Alimento){
    this.seleccionTable.items.forEach((a:SeleccionAlimento)=>{
      if(a.selected){
        this.alimentos.push(a.id);
        this.alimentosTable.items.push(a);
      }
    });
    this.filtrarAlimentos();
  }

  getTotalSeleccionados(){
    return this.seleccionTable.items.filter(a=>(<SeleccionAlimento>a).selected).length;
  }

  quitarAlimento(idxAlimento:number){
    this.alimentosTable.items.splice(idxAlimento,1);
    this.alimentos.splice(idxAlimento,1);
    this.filtrarAlimentos();
  }
}
