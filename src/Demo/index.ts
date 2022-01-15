import "../Style/style.scss";
import PreviewSlider from "./PriviewSlider";

new PreviewSlider(".slider-1", {
	min: 0,
	max: 2,
	step: 0.5,
	value: [0, 1],
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
	min: -15000,
	max: 15000,
	step: 500,
	value: [-3000, 3000],
	isRange: true,
	direction: "horizontal",
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: false,
	decimalPlaces: 1,
});

new PreviewSlider(".slider-4", {
	min: -100,
	max: 100,
	step: 10,
	value: [-50, 10],
	isRange: false,
	direction: "vertical",
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: false,
	decimalPlaces: 1,
});
