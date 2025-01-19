import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";


export const Home = () => (
	<div className="text-center" style={{ backgroundImage: 'url("https://img.freepik.com/vector-premium/fondo-star-wars-galaxia_510308-302.jpg")', backgroundSize: "cover" }}>
		<Characters />
		<br />
		<Planets />
		<br />
		<Vehicles />
	</div>
);
