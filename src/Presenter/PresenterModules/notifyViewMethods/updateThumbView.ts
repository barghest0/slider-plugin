import Presenter from "../../Presenter";


const updateThumbView = function (this: Presenter, value: number, offset: number, stance: number) {
	this.view.thumbView.setOffset(offset, stance);
	this.view.thumbView.setValue(value, stance);
	this.view.thumbView.updateThumbPosition(offset, stance);
	this.view.thumbView.activeStance = stance;
	if (this.params.onChange) {
		this.params.onChange(this.params);
	}
};

export default updateThumbView;