import checkParams from '../../../Presenter/PresenterModules/checkParams';
import Panel from '../Panel';

function handleChange(this: Panel, e: Event, param: string | number, valueIndex?: number) {
	const target = <HTMLInputElement>e.target;
	const { value } = target;
	const isValueParam = param === 'value';
	const isNumberParam = target.type === 'number';
	const isDirectionParam = param === 'direction';

	if (isNumberParam) {
		if (isValueParam && valueIndex) this.params[param][valueIndex] = +value;
		else this.params[param] = +value;
	} else if (isDirectionParam) this.params[param] = target.checked ? 'vertical' : 'horizontal';
	else this.params[param] = target.checked;

	this.parent.init(checkParams(this.params, this.DOMroot), 'rebuild');
	this.parent.panel.initializeFormValues(checkParams(this.params, this.DOMroot));
}
export default handleChange;
