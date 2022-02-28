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
} from '../../../../constants/panel';
import Panel from '../Panel';
import renderInput from './renderInput';

function renderPanel(this: Panel, DOMParent: HTMLElement) {
  const panel = document.createElement('div');
  panel.classList.add(`slider-panel`);
  panel.classList.add(`js-slider-panel`);

  renderInput('Min Value', 'number', MIN_CLASS, 'text-label', panel);
  renderInput('Max Value', 'number', MAX_CLASS, 'text-label', panel);
  renderInput('First Value', 'number', FIRST_VALUE_CLASS, 'text-label', panel);
  renderInput('Second Value', 'number', SECOND_VALUE_CLASS, 'text-label', panel);
  renderInput('Step', 'number', STEP_CLASS, 'text-label', panel);
  renderInput('Decimal Places', 'number', DECIMAL_PLACES_CLASS, 'text-label', panel);

  const checkboxesPanel = document.createElement('div');
  checkboxesPanel.classList.add('checkbox-panel');
  renderInput('Range', 'checkbox', IS_RANGE_CLASS, 'checkbox-label', checkboxesPanel);
  renderInput(
    'Vertical',
    'checkbox',
    IS_VERTICAL_CLASS,
    'checkbox-label',
    checkboxesPanel,
  );
  renderInput('Fill', 'checkbox', HAS_FILL_CLASS, 'checkbox-label', checkboxesPanel);
  renderInput('Tips', 'checkbox', HAS_TIPS_CLASS, 'checkbox-label', checkboxesPanel);
  renderInput('Scale', 'checkbox', HAS_SCALE_CLASS, 'checkbox-label', checkboxesPanel);
  renderInput('Decimal', 'checkbox', IS_DECIMAL_CLASS, 'checkbox-label', checkboxesPanel);

  DOMParent.appendChild(panel);
  panel.appendChild(checkboxesPanel);
}

export default renderPanel;
