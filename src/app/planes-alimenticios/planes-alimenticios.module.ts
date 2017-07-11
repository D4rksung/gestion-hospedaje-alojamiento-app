import { InformacionNutricionalService } from './shared/informacion-nutricional.service';
import { PlanAlimenticioService } from './shared/plan-alimenticio.service';
import { FormsModule } from '@angular/forms';
import { PlanesAlimenticiosRoutingModule, routedComponents } from './planes-alimenticios-routing.module';
import { NgModule } from '@angular/core';
import { PlanesAlimenticiosComponent } from './planes-alimenticios.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformacionNutricionalComponent } from './informacion-nutricional/informacion-nutricional.component';
import { NvD3Component } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  imports: [PlanesAlimenticiosRoutingModule,CommonModule,FormsModule,NgbModule],
  declarations: [routedComponents, InformacionNutricionalComponent, NvD3Component],
  providers: [PlanAlimenticioService, InformacionNutricionalService]
})
export class PlanesAlimenticiosModule { }
