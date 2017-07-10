import { Comida } from './comida.model';
import { ProgramacionDia } from './programacion-dia.model';
import { CriterioSeleccion } from './criterio-seleccion.model';
export class PlanAlimenticio {
  id: number;
  nombre: string;
  descripcion: string;
  especie: number = -1;
  condicionMedica: number = -1;
  criterios: CriterioSeleccion[] = [];
  programacionesDia: ProgramacionDia[] =
  [
    {numeroDia: 1, comidas: []}
  ];
}
