import { AppRoutingModule } from './app-routing.module';
import { PlanAlimenticioService } from './planes-alimenticios/shared/plan-alimenticio.service';
import { PlanAlimenticioComponent } from './planes-alimenticios/plan-alimenticio/plan-alimenticio.component';
import { CriteriosSeleccionComponent } from './planes-alimenticios/plan-alimenticio/criterios-seleccion/criterios-seleccion.component';
import { PanelSeleccionAlimentosComponent } from './planes-alimenticios/plan-alimenticio/programacion-diaria/panel-programacion-dia/panel-seleccion-alimentos/panel-seleccion-alimentos.component';
import { ProgramacionDiariaComponent } from './planes-alimenticios/plan-alimenticio/programacion-diaria/programacion-diaria.component';
import { FiltrosService } from './filtros.service';
import { AlimentosService } from './alimentos/alimentos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PanelProgramacionDiaComponent } from './planes-alimenticios/plan-alimenticio/programacion-diaria/panel-programacion-dia/panel-programacion-dia.component';
import { ListaPlanesAlimenticiosComponent } from './planes-alimenticios/lista-planes-alimenticios/lista-planes-alimenticios.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AlimentosService,FiltrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
