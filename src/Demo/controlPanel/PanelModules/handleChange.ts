import Panel from "../Panel";

const handleChange = function (this: Panel, e: JQuery.ChangeEvent) {
	const param = e.data.param;
	const index = e.data.index;
	const value = e.target.value;
	if (param === "value") this.params[param][index] = Number(value);
	else if (param === "direction")
		this.params[param] = e.target.checked ? "vertical" : "horizontal";
	else this.params[param] = Number(value) || e.target.checked;

	this.parent.slider.init(this.params, "rebuild");
};
export default handleChange;
