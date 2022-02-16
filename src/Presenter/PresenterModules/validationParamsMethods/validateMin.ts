function validateMin(min: number, max: number, step: number) {
  const validatedMin = Math.min(max - step, min);
  return validatedMin;
}
export default validateMin;
