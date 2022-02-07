import checkParams from '../../../Presenter/PresenterModules/checkParams';
import Panel from '../Panel';

const handleChange = function (this: Panel, e: Event, param: string | number, valueIndex?: number) {
  const target = e.target! as HTMLInputElement;
  const { value } = target;

  if (target.type === 'number') {
    if (param === 'value') this.params[param][valueIndex!] = +value;
    else this.params[param] = +value;
  } else {
    if (param === 'direction') this.params[param] = target.checked ? 'vertical' : 'horizontal';
    else this.params[param] = target.checked;
  }

  this.parent.init(checkParams(this.params, this.DOMroot), 'rebuild');
  this.parent.panel.initializeFormValues(checkParams(this.params, this.DOMroot));
};
export default handleChange;
