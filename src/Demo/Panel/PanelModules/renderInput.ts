function renderInput(
	text: string,
	type: string,
	inputClass: string,
	labelClass: string,
	parent: HTMLElement,
) {
	const custom = document.createElement('div');
	custom.classList.add('custom-input');

	const label = document.createElement('label');
	label.classList.add('label');
	label.classList.add(labelClass);

	const input = document.createElement('input');
	input.type = type;
	input.classList.add(inputClass);
	label.innerHTML = text;

	parent.appendChild(label);
	if (type === 'checkbox') {
		label.appendChild(input);
		label.appendChild(custom);
	} else {
		label.appendChild(custom);
		custom.appendChild(input);
	}
}

export default renderInput;
