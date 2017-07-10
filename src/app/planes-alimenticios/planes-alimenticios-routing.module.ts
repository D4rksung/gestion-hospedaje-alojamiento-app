import { PanelProgramacionDiaComponent } from './plan-alimenticio/programacion-diaria/panel-programacion-dia/panel-programacion-dia.component';
import { PanelSeleccionAlimentosComponent } from './plan-alimenticio/programacion-diaria/panel-programacion-dia/panel-seleccion-alimentos/panel-seleccion-alimentos.component';
import { ProgramacionDiariaComponent } from './plan-alimenticio/programacion-diaria/programacion-diaria.component';
import { CriteriosSeleccionComponent } from './plan-alimenticio/criterios-seleccion/criterios-seleccion.component';
import { PlanAlimenticioComponent } from './plan-alimenticio/plan-alimenticio.component';
import { PlanAlimenticioResolver } from './shared/plan-alimenticio-resolver.service';
import { PlanesAlimenticiosComponent } from './planes-alimenticios.component';
import { ListaPlanesAlimenticiosComponent } from './lista-planes-alimenticios/lista-planes-alimenticios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [{
  path: '',
  component: PlanesAlimenticiosComponent,
  children: [{
    path: '',
    component: ListaPlanesAlimenticiosComponent
  },
  {
    path: ':id',
    component: PlanAlimenticioComponent,
    resolve: {
      planAlimenticio: PlanAlimenticioResolver
    }
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [PlanAlimenticioResolver]
})
export class PlanesAlimenticiosRoutingModule { }

export const routedComponents = [
  PlanesAlimenticiosComponent,
  ListaPlanesAlimenticiosComponent,
  PlanAlimenticioComponent,
  CriteriosSeleccionComponent,
  ProgramacionDiariaComponent,
  PanelProgramacionDiaComponent,
  PanelSeleccionAlimentosComponent
  ];
