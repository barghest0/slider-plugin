import Panel from "../Panel";
import handleChange from "./handleChange";

const handleChangeFormValues = function (this: Panel) {
	this.minValueInput!.on("change", { param: "min" }, handleChange.bind(this));
	this.firstValueInput!.on(
		"change",
		{ param: "value", valueIndex: 0 },
		handleChange.bind(this)
	);
	this.secondValueInput!.on(
		"change",
		{ param: "value", valueIndex: 1 },
		handleChange.bind(this)
	);
	
	this.maxValueInput!.on("change", { param: "max" }, handleChange.bind(this));
	this.stepInput!.on("change", { param: "step" }, handleChange.bind(this));
	this.isRange!.on("change", { param: "isRange" }, handleChange.bind(this));
	this.isVertical!.on(
		"change",
		{ param: "direction" },
		handleChange.bind(this)
	);
	this.hasFill!.on("change", { param: "hasFill" }, handleChange.bind(this));
	this.hasTips!.on("change", { param: "hasTips" }, handleChange.bind(this));
};

export default handleChangeFormValues;
