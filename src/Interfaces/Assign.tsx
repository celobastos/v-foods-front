import Colaborador from "./Colaborador";
import Indicador from "./Indicador";

export default interface Assing{
  colaboratorId: number;
  indicatorId: number;
  month: number;
  year: number;
  colaborator: Colaborador;
  indicator: Indicador;
  weight: number;
  meta: number;
  superMeta: number;
  challenge: number;
  result: number;
  resultDate: Date;
}
 