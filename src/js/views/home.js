import React from "react";
import "../../styles/home.css";
import Card from "../component/CardCha";
import Characters from "../component/Characters";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<Vehicles />
		<Planets />
	</div>
);
