export function formatAge(ageInMonths: number): string {
  if (ageInMonths === 0) {
    return "recém-nascido";
  }

  const years = Math.floor(ageInMonths / 12);
  const months = ageInMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "mês" : "meses"}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? "ano" : "anos"}`;
  }

  return `${years} ${years === 1 ? "ano" : "anos"} e ${months} ${
    months === 1 ? "mês" : "meses"
  }`;
}
