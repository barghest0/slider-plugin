import Panel from "../Panel";

const handleChange = function (this: Panel, e: JQuery.ChangeEvent) {
	const param = e.data.param;
	const valueIndex = e.data.valueIndex;
	const value = e.target.value;

	if (param === "value") this.params[param][valueIndex] = Number(value);
	else if (param === "direction")
		this.params[param] = e.target.checked ? "vertical" : "horizontal";
	else this.params[param] = Number(value) || e.target.checked;

	this.parent.slider.presenter.init(this.params, "rebuild");
	this.parent.panel.initializeFormValues(this.params);
};
export default handleChange;
