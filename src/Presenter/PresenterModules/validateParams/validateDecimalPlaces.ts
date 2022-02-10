function validateDecimalPlaces(decimalPlaces: number, maxDecimalPlaces: number) {
	const validatedDecimalPlaces = Math.min(decimalPlaces, maxDecimalPlaces);
	return validatedDecimalPlaces;
}

export default validateDecimalPlaces;
