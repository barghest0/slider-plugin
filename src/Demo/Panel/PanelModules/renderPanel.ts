import Panel from '../Panel';
import renderInput from './renderInput';

function renderPanel(this: Panel) {
	const rootParent = <HTMLElement>this.DOMroot.parentElement;
	const root = <HTMLElement>rootParent.parentElement;
	const panel = document.createElement('div');
	panel.classList.add(`slider-panel`);
	panel.classList.add(`${this.root.slice(1)}__panel`);
	renderInput('Min Value', 'number', 'min-value', 'text-label', panel);
	renderInput('Max Value', 'number', 'max-value', 'text-label', panel);
	renderInput('First Value', 'number', 'first-value', 'text-label', panel);
	renderInput('Second Value', 'number', 'second-value', 'text-label', panel);
	renderInput('Step', 'number', 'step', 'text-label', panel);
	renderInput('Decimal Places', 'number', 'decimal-places', 'text-label', panel);

	const checkboxesPanel = document.createElement('div');
	checkboxesPanel.classList.add('checkbox-panel');
	renderInput('Range', 'checkbox', 'is-range', 'checkbox-label', checkboxesPanel);
	renderInput('Vertical', 'checkbox', 'vertical', 'checkbox-label', checkboxesPanel);
	renderInput('Fill', 'checkbox', 'fill', 'checkbox-label', checkboxesPanel);
	renderInput('Tips', 'checkbox', 'tips', 'checkbox-label', checkboxesPanel);
	renderInput('Scale', 'checkbox', 'scale', 'checkbox-label', checkboxesPanel);
	renderInput('Decimal', 'checkbox', 'decimal', 'checkbox-label', checkboxesPanel);

	root.appendChild(panel);
	panel.appendChild(checkboxesPanel);
}

export default renderPanel;
