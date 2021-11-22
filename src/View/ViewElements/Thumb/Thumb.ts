import View from "../../View";

class Thumb {
	private parentElement: View;
	private thumb: JQuery<HTMLElement>;
	constructor(parentElement: View) {
		this.parentElement = parentElement;
		this.thumb = $(".slider__thumb");
	}
	public createThumb() {
		this.parentElement.trackField.append(
			'<div class="slider__thumb"></div>'
		);
	}

}

export default Thumb;
