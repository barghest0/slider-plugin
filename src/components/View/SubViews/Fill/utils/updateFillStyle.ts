import Fill from '../Fill';

function updateFill(this: Fill) {
  if (this.view.getParams().isRange) {
    this.fill.style[this.view.offsetDirection] = `${
      this.getState().fillOffset
    }%`;
    this.fill.style[this.view.fillDirection] = `${this.getState().fillSize}%`;
  } else {
    this.fill.style[this.view.fillDirection] = `${this.getState().fillSize}%`;
  }
}

export default updateFill;
