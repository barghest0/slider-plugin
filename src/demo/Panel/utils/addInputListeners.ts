import { FIRST_VALUE, SECOND_VALUE } from '../../../components/Slider/constants';
import { Params } from '../../../components/Slider/types';

import Panel from '../Panel';

import handleDirectionChange from './handleDirectionChange';
import handleOtherParamChange from './handleOtherParamChange';
import handleValueChange from './handleValueChange';

function addInputListeners(this: Panel) {
  this.inputs.minValueInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.min),
  );

  this.inputs.maxValueInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.max),
  );

  this.inputs.firstValueInput.addEventListener('change', event =>
    handleValueChange.call(this, event, FIRST_VALUE),
  );

  this.inputs.secondValueInput.addEventListener('change', event =>
    handleValueChange.call(this, event, SECOND_VALUE),
  );

  this.inputs.isVertical.addEventListener('change', event =>
    handleDirectionChange.call(this, event),
  );

  this.inputs.decimalPlacesInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.decimalPlaces),
  );

  this.inputs.stepInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.step),
  );

  this.inputs.isRange.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.isRange),
  );

  this.inputs.hasFill.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.hasFill),
  );

  this.inputs.hasTips.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.hasTips),
  );

  this.inputs.hasScale.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.hasScale),
  );

  this.inputs.isDecimal.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.isDecimal),
  );
}

export default addInputListeners;
