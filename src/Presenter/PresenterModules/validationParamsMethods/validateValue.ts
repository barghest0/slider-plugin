function validateValue(value: number[] | number) {
  if (!Array.isArray(value)) return [value];

  return value.slice(0, 2);
}

export default validateValue;
