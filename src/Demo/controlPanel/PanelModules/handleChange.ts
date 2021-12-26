import Panel from "../Panel";

const handleChange = function (this: Panel, e: JQuery.ChangeEvent) {
	const param: string = e.data.param;
	const index: number = e.data.index;
	this.parent.handleChangePanelParams(this.params);
};
export default handleChange;
