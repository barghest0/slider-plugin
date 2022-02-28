function validateDecimalPlaces(
  decimalPlaces: number,
  maxDecimalPlaces: number,
  isDecimal: boolean,
) {
  const validatedDecimalPlaces = Math.min(decimalPlaces, maxDecimalPlaces);
  return isDecimal ? validatedDecimalPlaces : 0;
}

export default validateDecimalPlaces;
