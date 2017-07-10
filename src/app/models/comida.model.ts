export enum TipoComida {
  Desayuno = 1, Almuerzo, Cena
}

export class Comida {
  tipo: TipoComida;
  alimentos: number[];
}
