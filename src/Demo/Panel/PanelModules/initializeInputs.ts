import Panel from '../Panel';

const initializeInputs = function (this: Panel, root?: string) {
  const panel = document.querySelector(`${root}__panel`);
  this.minValueInput = panel!.querySelector('.js-input__min-value');
  this.maxValueInput = panel!.querySelector('.js-input__max-value');
  this.firstValueInput = panel!.querySelector('.js-input__first-value');
  this.secondValueInput = panel!.querySelector('.js-input__second-value');
  this.stepInput = panel!.querySelector('.js-input__step');
  this.isRange = panel!.querySelector('.js-checkbox__is-range');
  this.isVertical = panel!.querySelector('.js-checkbox__vertical');
  this.hasFill = panel!.querySelector('.js-checkbox__fill');
  this.hasTips = panel!.querySelector('.js-checkbox__tips');
};
export default initializeInputs;
