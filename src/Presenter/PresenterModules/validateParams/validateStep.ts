function validateStep(step: number) {
	const validatedStep = Math.max(step, 1);
	return validatedStep;
}

export default validateStep;
