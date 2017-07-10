import { Componente } from './componente.model';

export const tiposComponentes:TipoComponente[]=[
  {id: 1, nombre: 'Vitaminas', componentes:<Componente[]>[
    {
      id: 1,
      nombre: 'A',
      unidad: 'g'
    },
    {
      id: 2,
      nombre: 'B',
      unidad: 'g'
    }
  ]
 }
];

export class TipoComponente{
  id: number;
  nombre: string;
  componentes: Componente[];
}
