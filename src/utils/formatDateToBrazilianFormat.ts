export function formatDateToBrazilianFormat(inputDate: string): string {
  const dateParts = inputDate.split('-');

  const day = dateParts[2];
  const month = dateParts[1];
  const year = dateParts[0];

  return `${day}/${month}/${year}`;
}

