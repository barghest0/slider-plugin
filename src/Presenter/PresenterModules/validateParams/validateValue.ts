function validateValue(value: number[] | number) {
	if (!Array.isArray(value)) return [value];
	return value;
}

export default validateValue;
