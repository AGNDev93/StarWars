import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";

export const Home = () => (
	<div className="text-center mt-3 ms-5 me-5">
		<Characters />
		<br />
		<Planets />
		<br />
		<Vehicles />
	</div>
);
