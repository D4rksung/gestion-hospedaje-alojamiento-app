import { FiltrosService, FiltrosState } from './../filtros.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-planes-alimenticios',
  templateUrl: './planes-alimenticios.component.html',
  styleUrls: ['./planes-alimenticios.component.css']
})
export class PlanesAlimenticiosComponent implements OnInit {

  visible:boolean = false;
  private filtrosStateChanged: Subscription;

  constructor(private filtrosService: FiltrosService) { }

  ngOnInit() {
    this.filtrosService.loadFiltros();
    this.filtrosStateChanged = this.filtrosService.filtrosState
    .subscribe((state:FiltrosState)=>this.visible = state.loaded);
  }

}
