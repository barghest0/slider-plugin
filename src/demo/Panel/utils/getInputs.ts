import {
  DECIMAL_PLACES_CLASS,
  FIRST_VALUE_CLASS,
  HAS_FILL_CLASS,
  HAS_SCALE_CLASS,
  HAS_TIPS_CLASS,
  IS_DECIMAL_CLASS,
  IS_RANGE_CLASS,
  IS_VERTICAL_CLASS,
  MAX_CLASS,
  MIN_CLASS,
  SECOND_VALUE_CLASS,
  STEP_CLASS,
} from '../constants';

import { PREFIX } from '../../../components/Slider/constants';



function getInputs(DOMparent: HTMLElement) {
  const minValueInput = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${MIN_CLASS}`)
  );
  const maxValueInput = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${MAX_CLASS}`)
  );
  const firstValueInput = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${FIRST_VALUE_CLASS}`)
  );
  const secondValueInput = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${SECOND_VALUE_CLASS}`)
  );
  const decimalPlacesInput = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${DECIMAL_PLACES_CLASS}`)
  );
  const stepInput = <HTMLInputElement>DOMparent.querySelector(`.${PREFIX}-${STEP_CLASS}`);
  const isRange = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${IS_RANGE_CLASS}`)
  );
  const isVertical = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${IS_VERTICAL_CLASS}`)
  );
  const hasFill = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${HAS_FILL_CLASS}`)
  );
  const hasTips = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${HAS_TIPS_CLASS}`)
  );
  const hasScale = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${HAS_SCALE_CLASS}`)
  );
  const isDecimal = <HTMLInputElement>(
    DOMparent.querySelector(`.${PREFIX}-${IS_DECIMAL_CLASS}`)
  );

  return {
    minValueInput,
    maxValueInput,
    firstValueInput,
    secondValueInput,
    decimalPlacesInput,
    stepInput,
    isRange,
    isVertical,
    hasFill,
    hasTips,
    hasScale,
    isDecimal,
  };
}

export default getInputs;
