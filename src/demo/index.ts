import "../Style/style.scss";
import Presenter from "../Presenter/Presenter";

const options = {
	min: 0,
	max: 200,
	step: 10,
	value: 75,
};

new Presenter(".slider", options);
