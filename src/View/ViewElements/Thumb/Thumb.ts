import {IHorizontalSliderCoords} from "../../../utils/interfaces/interfaces";
import View from "../../View";
import getCoords from "./utils/getCoords";

class Thumb {
	private parentElement: View;
	private thumb: JQuery<HTMLElement>;
	public step: number;
	public stepPercent:number
	public stepCount: number
	constructor(parentElement: View) {
		this.parentElement = parentElement;
		this.thumb = $(".slider__thumb");
		this.step = 1;
		this.stepPercent = 1
		this.stepCount = 1
	}
	public createThumb() {
		this.parentElement.parent.append('<div class="slider__thumb"></div>');
	}

	public dragThumb() {
		this.parentElement.parent.on(
			"mousedown",
			{ track: ".slider__track", thumb: ".slider__thumb",fill:'.slider__fill' },
			(event: JQuery.MouseDownEvent) => {
				const sliderCoords = getCoords($(event.data.track));
				$("body").on("mousemove", (e: JQuery.MouseMoveEvent) => {
						let left =((e.pageX - sliderCoords!.left) / sliderCoords.width)*100
						if (left<0) left = 0 
						if (left>100) left=100 
						let stepLeft = Math.round(left/this.stepPercent)*this.stepPercent
						if (stepLeft < 0) stepLeft = 0
						if (stepLeft > 100) stepLeft = 100
						$(event.data.thumb).css({ left: stepLeft + '%' })
						$(event.data.fill).css( {width:stepLeft + '%'})
						let result = ((stepLeft / this.stepPercent) * this.step).toFixed()
						console.log(result);
				});
			}
		);
		
		$("body").on("mouseup", (event: JQuery.MouseUpEvent) => {
			$("body").off("mousemove");
		});
	}
}

export default Thumb;
