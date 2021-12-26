import Panel from "../Panel";
import handleChange from "./handleChange";

const handleChangeFormValues = function (this: Panel) {
	this.minValueInput!.on("change", { param: "min" }, handleChange.bind(this));
	this.firstValueInput!.on(
		"change",
		{ params: "value", index: 0 },
		handleChange.bind(this)
	);
};

export default handleChangeFormValues;
