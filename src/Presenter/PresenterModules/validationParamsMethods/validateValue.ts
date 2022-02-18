function validateValue(value: number[] | number) {
  if (!Array.isArray(value)) return [value];
  return value.length > 2 ? value.slice(0, 2) : value;
}

export default validateValue;
