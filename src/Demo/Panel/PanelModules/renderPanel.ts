import Panel from '../Panel';
import renderInput from './renderInput';


const renderPanel = function (this: Panel) {
	const root = this.DOMroot.parentElement!.parentElement;
	const panel = document.createElement('div');
	panel.classList.add(`slider-panel`);
	panel.classList.add(`${this.root.slice(1)}__panel`);
	renderInput('Min Value', 'number', "js-input__min-value", 'js-input', panel);
	renderInput('Max Value', 'number', "js-input__max-value", 'js-input', panel);
	renderInput('First Value', 'number', "js-input__first-value", 'js-input', panel);
	renderInput('Second Value', 'number', "js-input__second-value", 'js-input', panel);
	renderInput('Step', 'number', "js-input__step", 'js-input', panel);
	renderInput('Decimal Places', 'number', "js-input__decimal-places", 'js-input', panel);
	

	const checkboxesPanel = document.createElement('div');
	checkboxesPanel.classList.add('checkbox-panel');
	renderInput('Range', 'checkbox', "js-checkbox__is-range", 'js-checkbox', checkboxesPanel);
	renderInput('Vertical', 'checkbox', "js-checkbox__vertical", 'js-checkbox', checkboxesPanel);
	renderInput('Fill', 'checkbox', "js-checkbox__fill", 'js-checkbox', checkboxesPanel);
	renderInput('Tips', 'checkbox', "js-checkbox__tips", 'js-checkbox', checkboxesPanel);
	renderInput('Scale', 'checkbox', "js-checkbox__scale", 'js-checkbox', checkboxesPanel);
	renderInput('Decimal', 'checkbox', "js-checkbox__decimal", 'js-checkbox', checkboxesPanel);

	root!.appendChild(panel);
	panel.appendChild(checkboxesPanel);
};


export default renderPanel;

