import View from "../View";

const initialViewRender = function (this: View	) {
	$(".slider__thumb").css({
		left: this.value / (this.ends.max / 100) + "%",
	});
	$(".slider__fill").css({
		width: this.value / (this.ends.max / 100) + "%",
	});
};

export default initialViewRender;
