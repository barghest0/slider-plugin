import { CHECKBOX_TYPE, CUSTOM_CLASS, TARGET_CLASS } from '../constants';

import { PREFIX } from '../../../components/Slider/constants';

function renderInput(
  text: string,
  type: string,
  paramClass: string,
  parentClass: string,
  parent: HTMLElement,
) {
  const custom = document.createElement('div');
  custom.classList.add(`${parentClass}__${TARGET_CLASS}`);

  const label = document.createElement('label');
  label.classList.add(parentClass);

  const input = document.createElement('input');
  input.type = type;
  input.classList.add(TARGET_CLASS);
  input.classList.add(paramClass);
  input.classList.add(`${PREFIX}-${paramClass}`);
  label.innerHTML = text;

  parent.appendChild(label);

  if (type === CHECKBOX_TYPE) {
    label.appendChild(input);
    label.appendChild(custom);
  } else {
    label.appendChild(custom);
    custom.appendChild(input);
  }
}

export default renderInput;
