import Presenter from "../../Presenter";



const updateTipView = function(this:Presenter,stance: number, offset: number) {
    this.view.tipView.updateTipsPosition(stance, offset);
}

export default updateTipView