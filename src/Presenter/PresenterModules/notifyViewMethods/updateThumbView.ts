import Presenter from "../../Presenter";


const updateThumbView = function(this:Presenter,value: number, offset: number, stance: number) {
		this.view.thumbView.setOffset(offset, stance);
		this.view.thumbView.setValue(value, stance);
}

export default updateThumbView