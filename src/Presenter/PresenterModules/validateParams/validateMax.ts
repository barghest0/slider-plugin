function validateMax(min: number, max: number, step: number) {
	let validatedMax = Math.max(min - step, max);
	
	return validatedMax;
}

export default validateMax;
