import Panel from '../Panel';


const createPanel = function (this: Panel) {

	const root = this.DOMroot.parentElement!.parentElement;

	const panel = document.createElement('div');
	panel.classList.add(`slider-panel`);
	panel.classList.add(`${this.root.slice(1)}__panel`);
	createInput('Min Value', 'number', "js-input__min-value", 'js-input', panel);
	createInput('Max Value', 'number', "js-input__max-value", 'js-input', panel);
	createInput('First Value', 'number', "js-input__first-value", 'js-input', panel);
	createInput('Second Value', 'number', "js-input__second-value", 'js-input', panel);
	createInput('Step', 'number', "js-input__step", 'js-input', panel);
	createInput('Decimal Places', 'number', "js-input__decimal-places", 'js-input', panel);
	

	const checkboxesPanel = document.createElement('div');
	checkboxesPanel.classList.add('checkbox-panel');
	createInput('Range', 'checkbox', "js-checkbox__is-range", 'js-checkbox', checkboxesPanel);
	createInput('Vertical', 'checkbox', "js-checkbox__vertical", 'js-checkbox', checkboxesPanel);
	createInput('Fill', 'checkbox', "js-checkbox__fill", 'js-checkbox', checkboxesPanel);
	createInput('Tips', 'checkbox', "js-checkbox__tips", 'js-checkbox', checkboxesPanel);
	createInput('Scale', 'checkbox', "js-checkbox__scale", 'js-checkbox', checkboxesPanel);
	createInput('Decimal', 'checkbox', "js-checkbox__decimal", 'js-checkbox', checkboxesPanel);

	root!.appendChild(panel);
	panel.appendChild(checkboxesPanel);
};

export const createInput = function (text: string, type: string, inputClass: string,labelClass:string, parent: HTMLElement) {
	
	const container = document.createElement('div');
	container.classList.add('input-container');

	const label = document.createElement('label');
	label.classList.add('label')
	label.classList.add(labelClass)

	const input = document.createElement('input');
	input.type = type;
	input.classList.add(inputClass);
	label.innerHTML = text;

	parent.appendChild(container);
	container.appendChild(label);
	label.appendChild(input);
};

export default createPanel;

