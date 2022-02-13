import checkParams from '../../../Presenter/PresenterModules/validateParams/validateParams';
import { Directions, InitMods, Params } from '../../../utils/interfaces';
import Panel from '../Panel';

function handleChange(this: Panel, event: Event, param: string | number, valueIndex?: number) {
	const target = <HTMLInputElement>event.target;
	const { value } = target;
	const isValueParam = param === Params.value;
	const isNumberParam = target.type === 'number';
	const isDirectionParam = param === Params.direction;

	if (isNumberParam) {
		if (isValueParam) this.params[param][valueIndex!] = +value;
		else this.params[param] = +value;
	} else if (isDirectionParam)
		this.params[param] = target.checked ? Directions.vertical : Directions.horizontal;
	else this.params[param] = target.checked;

	this.parent.init(checkParams(this.params, this.DOMroot), InitMods.rebuild);
	this.parent.panel.initializeFormValues(checkParams(this.params, this.DOMroot));
}
export default handleChange;
