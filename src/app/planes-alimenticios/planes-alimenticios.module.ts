import { PlanAlimenticioService } from './shared/plan-alimenticio.service';
import { FormsModule } from '@angular/forms';
import { PlanesAlimenticiosRoutingModule, routedComponents } from './planes-alimenticios-routing.module';
import { NgModule } from '@angular/core';
import { PlanesAlimenticiosComponent } from './planes-alimenticios.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformacionNutricionalComponent } from './informacion-nutricional/informacion-nutricional.component';

@NgModule({
  imports: [PlanesAlimenticiosRoutingModule,CommonModule,FormsModule,NgbModule],
  declarations: [routedComponents, InformacionNutricionalComponent],
  providers: [PlanAlimenticioService]
})
export class PlanesAlimenticiosModule { }
