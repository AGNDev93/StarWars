import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";


export const Home = () => (
	<div className="text-center" style={{ backgroundImage: 'url("https://img.freepik.com/vector-gratis/fondo-nave-espacial_23-2147904013.jpg?ga=GA1.1.625650846.1737131641&semt=ais_incoming")', backgroundSize: "cover" }}>
		<Characters />
		<br />
		<Planets />
		<br />
		<Vehicles />
	</div>
);
