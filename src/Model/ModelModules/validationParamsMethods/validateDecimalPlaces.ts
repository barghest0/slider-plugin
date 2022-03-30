import { MIN_DECIMAL_PLACES } from '../../../constants/slider';

function validateDecimalPlaces(
  decimalPlaces: number,
  maxDecimalPlaces: number,
  isDecimal: boolean,
) {
  const validatedDecimalPlaces = Math.min(decimalPlaces, maxDecimalPlaces);
  return isDecimal ? validatedDecimalPlaces : MIN_DECIMAL_PLACES;
}

export default validateDecimalPlaces;
