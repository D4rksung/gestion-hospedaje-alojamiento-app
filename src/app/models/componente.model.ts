export const COMPONENTES = [{codigo: 1, nombre: "Carbohidratos"}, {codigo: 2, nombre: "Grasas"}, {codigo: 3, nombre: "Minerales"}, {codigo: 4, nombre: "Proteinas"},{codigo: 5, nombre: "Vitaminas"}];
export class Componente{
  id: number;
  nombre: string;
  cantidad: number=0;
  unidad: string;
}
