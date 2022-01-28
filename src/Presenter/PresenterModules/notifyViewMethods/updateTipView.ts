import Presenter from '../../Presenter';

const updateTipView = function (this: Presenter, offset: number, stance: number, value: number) {
    this.view.tipView.setOffset(offset, stance);
    this.view.tipView.updateTipsPosition(offset, stance, value);
};

export default updateTipView;
