import Presenter from '../../Presenter';

function updateThumbView(
	this: Presenter,
	stance: number,
	value: number,
	offset: number,
) {
	this.view.thumbView.setOffset(offset, stance);
	this.view.thumbView.setValue(value, stance);
	this.view.thumbView.updateThumbPosition(stance);
	this.view.thumbView.activeStance = stance;
	if (this.params.onChange) {
		this.params.onChange(this.params);
	}
}

export default updateThumbView;
