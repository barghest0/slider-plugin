import Thumb from '../Thumb';

const validateCollision = function validateCollision(this: Thumb, stance: number) {
  const reverseStance = +!stance;
  if (stance === 0) {
    if (this.getValue()[0] > this.getValue()[1]) {
      this.setOffset(1, this.getOffset()[0]);
      return reverseStance;
    }
  } else if (this.getValue()[1] < this.getValue()[0]) {
    this.setOffset(0, this.getOffset()[1]);
    return reverseStance;
  }
  return stance;
};

export default validateCollision;
