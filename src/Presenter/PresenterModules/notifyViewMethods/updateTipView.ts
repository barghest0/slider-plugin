import Presenter from '../../Presenter';

const updateTipView = function (this: Presenter, stance: number, offset: number, value: number) {
    this.view.tipView.setOffset(offset, stance);
    this.view.tipView.setValue(value, stance);
    this.view.tipView.updateTipsPosition(stance);
};

export default updateTipView;
