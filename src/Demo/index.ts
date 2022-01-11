import "../Style/style.scss";
import PreviewSlider from "./PriviewSlider";

new PreviewSlider(".slider-1", {
	min: -2,
	max: 2,
	step: 0.2,
	value: [-1, 1],
	isRange: false,
	direction: "horizontal",
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: true,
	decimalPlaces: 1,
});

// new PreviewSlider(".slider-2", {
// 	min: 0,
// 	max: 200,
// 	step: 20,
// 	value: [10, 150],
// 	isRange: true,
// 	direction: "horizontal",
// });
