import { createAbstractBuilder } from 'typescript';
import Panel from '../Panel';


const createPanel = function (this: Panel) {
	const panel = this.DOMroot.parentElement?.parentElement;

	const sliderPanel = document.createElement('div');
	sliderPanel.classList.add('row');
	sliderPanel.classList.add('wrap');
	sliderPanel.classList.add(`${this.root.slice(1)}__panel`);
	createInput('Min Value', 'number', "js-input__min-value", sliderPanel);
	createInput('Max Value', 'number', "js-input__max-value", sliderPanel);
	createInput('First Value', 'number', "js-input__first-value", sliderPanel);
	createInput('Second Value', 'number', "js-input__second-value", sliderPanel);
	createInput('Step', 'number', "js-input__step", sliderPanel);
	createInput('Decimal Places', 'number', "js-input__decimal-places", sliderPanel);

	const checkboxesPanel = document.createElement('div');
	checkboxesPanel.classList.add('mb-3');
	checkboxesPanel.classList.add('col-sm-12');
	checkboxesPanel.classList.add('row');
	createInput('Range', 'checkbox', "js-checkbox__is-range", checkboxesPanel);
	createInput('Vertical', 'checkbox', "js-checkbox__vertical", checkboxesPanel);
	createInput('Fill', 'checkbox', "js-checkbox__fill", checkboxesPanel);
	createInput('Tips', 'checkbox', "js-checkbox__tips", checkboxesPanel);
	createInput('Scale', 'checkbox', "js-checkbox__scale", checkboxesPanel);
	createInput('Decimal', 'checkbox', "js-checkbox__decimal", checkboxesPanel);


	sliderPanel?.appendChild(checkboxesPanel);
	panel?.appendChild(sliderPanel);
};

const createInput = function (text: string, type: string, inputClass: string, parent?: HTMLElement) {
	if (type === 'number') {
		const container = document.createElement('div');
		container.classList.add('mb-3');
		container.classList.add('col-sm-6');
		container.classList.add('js-input');

		const label = document.createElement('label');
		label.classList.add('d-block');

		const input = document.createElement('input');
		input.type = 'number';
		input.classList.add('form-control');
		input.classList.add(inputClass);
		label.innerHTML = text;

		label.appendChild(input);
		container.appendChild(label);

		parent?.appendChild(container);
	} else {
		const container = document.createElement('div');
		container.classList.add('col-sm-2');

		const checkBlock = document.createElement('div');
		checkBlock.classList.add('form-check');
		checkBlock.classList.add('js-checkbox');

		const label = document.createElement('label');
		label.classList.add('form-check-label');

		const input = document.createElement('input');
		input.type = 'checkbox';
		input.classList.add('form-check-input');
		input.classList.add(inputClass);
		label.innerHTML = text;

		label.appendChild(input);
		checkBlock.appendChild(label);
		container.appendChild(checkBlock);

		parent?.appendChild(container);
	}


};

export default createPanel;

