import "../Style/style.scss";
import Presenter from "../Presenter/Presenter";

const options = {
	min: 0,
	max: 150,
	step: 5,
};

new Presenter(".slider", options);
