import View from "../../View";

class Thumb {
	private parentElement: View;
	private thumb: JQuery<HTMLElement>;
	constructor(parentElement: View) {
		this.parentElement = parentElement;
		this.thumb = $(".slider__thumb");
	}
	public createThumb() {

			this.parentElement.parent.append('<div class="slider__thumb"></div>')
			
	}

	public dragThumb() {
			this.parentElement.parent.on('click',(e:JQuery.ClickEvent)=>{
					console.log(e.offsetX);
					
					$('.slider__thumb').css({left: e.offsetX})  
						$('.slider__fill').css({width:e.offsetX})	
			})
		this.parentElement.parent.on(
			"mousedown",
			".slider__thumb",
			(event: JQuery.MouseDownEvent) => {
						
			}
		);
	}
}

export default Thumb;
