import Panel from 'demo/Panel';

function handleValueChange(this: Panel, event: Event, valueIndex: number) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const params = this.slider.getParams();
  params.value[valueIndex] = Number(value);

  this.updatePanelParams(params);
}

export default handleValueChange;
