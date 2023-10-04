export default function mapMonthNumberToName(monthNumber: number): string {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
  
    if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
    }
  
    return "Mês inválido";
  }