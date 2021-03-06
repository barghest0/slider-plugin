import { FIRST_VALUE, SECOND_VALUE } from 'components/Slider/constants';
import { Params } from 'components/Slider/types';

import Panel from '../Panel';
import handleDirectionChange from './handleDirectionChange';
import handleCommonParamChange from './handleCommonParamChange';
import handleValueChange from './handleValueChange';

function addInputListeners(this: Panel) {
  const makeHandleCommonParamChange = (param: Params) => (event: Event) => {
    handleCommonParamChange.call(this, event, param);
  };

  const makeHandleValueChange = (value: number) => {
    return (event: Event) => {
      handleValueChange.call(this, event, value);
    };
  };

  const makeHandleDirectionChange = () => {
    return (event: Event) => {
      handleDirectionChange.call(this, event);
    };
  };

  this.inputs.minValueInput.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.min),
  );

  this.inputs.canThumbPush.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.canThumbPush),
  );

  this.inputs.maxValueInput.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.max),
  );

  this.inputs.firstValueInput.addEventListener(
    'change',
    makeHandleValueChange(FIRST_VALUE),
  );

  this.inputs.secondValueInput.addEventListener(
    'change',
    makeHandleValueChange(SECOND_VALUE),
  );

  this.inputs.isVertical.addEventListener(
    'change',
    makeHandleDirectionChange(),
  );

  this.inputs.stepInput.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.step),
  );

  this.inputs.isRange.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.isRange),
  );

  this.inputs.hasFill.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.hasFill),
  );

  this.inputs.hasTips.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.hasTips),
  );

  this.inputs.hasScale.addEventListener(
    'change',
    makeHandleCommonParamChange(Params.hasScale),
  );
}

export default addInputListeners;
