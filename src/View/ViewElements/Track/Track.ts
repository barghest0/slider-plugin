import View from "../../View";

class Track {
	private parentElement: View;
	public track: JQuery<HTMLElement>;
	constructor(parentElement: View) {
		this.parentElement = parentElement;
		this.track = $(".slider__track");
	}
	public createTrack() {
		this.parentElement.parent.append('<div class="slider__track"></div>');
	}
	public clickTrack() {
		this.parentElement.parent.on(
			"click",
			{ track: ".slider__track" },
			(e) => {
				const cursorPosition = {
					x: e.pageX - $(e.currentTarget).position().left,
				};
				$(".slider__thumb").css({ left: cursorPosition.x });
				$(".slider__fill").css({ width: cursorPosition.x });
			}
		);
	}
}

export default Track;
