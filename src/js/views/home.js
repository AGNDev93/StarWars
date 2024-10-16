import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<br />
		<Vehicles />
		<br />
		<Planets />
	</div>
);
