export default interface IndicatorData {
    colaboratorId: number;
    indicatorId: number;
    month: number;
    year: number;
    weight: number;
    meta: number;
    superMeta: number;
    challenge: number;
    result: number | null;
    resultDate: string | null;
  }
  