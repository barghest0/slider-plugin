import "../Style/style.scss";
import PreviewSlider from "./PriviewSlider";

new PreviewSlider(".slider-1", {
	min: -2,
	max: 2,
	step: 0.4,
	value: -1,
	isRange: false,
	direction: "horizontal",
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: true,
	decimalPlaces: 1,
});


new PreviewSlider(".slider-2", {
	min: -6,
	max: 6,
	step: 3,
	value: [-3, 3],
	isRange: true,
	direction: "horizontal",
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: true,
	decimalPlaces: 1,
});

new PreviewSlider(".slider-3", {
	min: -100,
	max: 100,
	step: 10,
	value: [-10, 10],
	isRange: false,
	direction: "vertical",
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: false,
	decimalPlaces: 1,
});