const renderInput = function (text: string, type: string, inputClass: string,labelClass:string, parent: HTMLElement) {
	
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

export default renderInput