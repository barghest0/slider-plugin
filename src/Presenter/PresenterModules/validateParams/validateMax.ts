function validateMax(min: number, max: number, step: number) {
	const validatedMax = Math.max(min - step, max);

	return validatedMax;
}

export default validateMax;
