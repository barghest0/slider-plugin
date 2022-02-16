function validateStep(step: number, min: number, max: number) {
  const validatedStep = Math.min(Math.abs(min - max), Math.abs(step));
  return validatedStep;
}

export default validateStep;
