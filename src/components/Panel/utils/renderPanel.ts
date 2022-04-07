import { PREFIX } from '../../Slider/constants';
import {
  CHECKBOX_LABEL_CLASS,
  CHECKBOX_PANEL_CLASS,
  CHECKBOX_TYPE,
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
  NUMBER_TYPE,
  PANEL_CLASS,
  SECOND_VALUE_CLASS,
  STEP_CLASS,
  TEXT_LABEL_CLASS,
} from '../constants';
import Panel from '../Panel';
import renderInput from './renderInput';

function renderPanel(this: Panel) {
  const panel = document.createElement('div');
  panel.classList.add(PANEL_CLASS);
  panel.classList.add(`${PREFIX}-${PANEL_CLASS}`);

  renderInput('Min Value', NUMBER_TYPE, MIN_CLASS, TEXT_LABEL_CLASS, panel);
  renderInput('Max Value', NUMBER_TYPE, MAX_CLASS, TEXT_LABEL_CLASS, panel);
  renderInput('First Value', NUMBER_TYPE, FIRST_VALUE_CLASS, TEXT_LABEL_CLASS, panel);
  renderInput('Second Value', NUMBER_TYPE, SECOND_VALUE_CLASS, TEXT_LABEL_CLASS, panel);
  renderInput('Step', NUMBER_TYPE, STEP_CLASS, TEXT_LABEL_CLASS, panel);
  renderInput(
    'Decimal Places',
    NUMBER_TYPE,
    DECIMAL_PLACES_CLASS,
    TEXT_LABEL_CLASS,
    panel,
  );

  const checkboxesPanel = document.createElement('div');
  checkboxesPanel.classList.add(CHECKBOX_PANEL_CLASS);
  renderInput(
    'Range',
    CHECKBOX_TYPE,
    IS_RANGE_CLASS,
    CHECKBOX_LABEL_CLASS,
    checkboxesPanel,
  );
  renderInput(
    'Vertical',
    CHECKBOX_TYPE,
    IS_VERTICAL_CLASS,
    CHECKBOX_LABEL_CLASS,
    checkboxesPanel,
  );
  renderInput(
    'Fill',
    CHECKBOX_TYPE,
    HAS_FILL_CLASS,
    CHECKBOX_LABEL_CLASS,
    checkboxesPanel,
  );
  renderInput(
    'Tips',
    CHECKBOX_TYPE,
    HAS_TIPS_CLASS,
    CHECKBOX_LABEL_CLASS,
    checkboxesPanel,
  );
  renderInput(
    'Scale',
    CHECKBOX_TYPE,
    HAS_SCALE_CLASS,
    CHECKBOX_LABEL_CLASS,
    checkboxesPanel,
  );
  renderInput(
    'Decimal',
    CHECKBOX_TYPE,
    IS_DECIMAL_CLASS,
    CHECKBOX_LABEL_CLASS,
    checkboxesPanel,
  );

  this.DOMparent.appendChild(panel);
  panel.appendChild(checkboxesPanel);
}

export default renderPanel;
