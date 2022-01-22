import Presenter from "../../Presenter";



const updateTipView = function (this: Presenter, offset: number, stance: number) {
    this.view.tipView.updateTipsPosition(offset, stance);
};

export default updateTipView;