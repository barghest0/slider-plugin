import { FIRST_VALUE, SECOND_VALUE } from '../../../constants/slider';
import { Params } from '../../../types/slider';
import Panel from '../Panel';
import handleDirectionChange from './handleDirectionChange';
import handleOtherParamChange from './handleOtherParamChange';
import handleValueChange from './handleValueChange';

function addInputListeners(this: Panel) {
  this.minValueInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.min),
  );

  this.maxValueInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.max),
  );
  this.firstValueInput.addEventListener('change', event =>
    handleValueChange.call(this, event, FIRST_VALUE),
  );
  this.secondValueInput.addEventListener('change', event =>
    handleValueChange.call(this, event, SECOND_VALUE),
  );
  this.isVertical.addEventListener('change', event =>
    handleDirectionChange.call(this, event),
  );
  this.decimalPlacesInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.decimalPlaces),
  );
  this.stepInput.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.step),
  );

  this.isRange.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.isRange),
  );

  this.hasFill.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.hasFill),
  );
  this.hasTips.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.hasTips),
  );
  this.hasScale.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.hasScale),
  );
  this.isDecimal.addEventListener('change', event =>
    handleOtherParamChange.call(this, event, Params.isDecimal),
  );
}

export default addInputListeners;
