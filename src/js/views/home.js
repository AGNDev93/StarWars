import React from "react";
import "../../styles/home.css";
import Characters from "../component/Characters";
import Vehicles from "../component/Vehicles";
import Planets from "../component/Planets";

export const Home = () => (
	<div className="text-center" style={{backgroundImage: 'url("https://img.freepik.com/vector-gratis/fondo-movil-galaxia-tonos-azules-purpura_79603-549.jpg?semt=ais_incoming")', backgroundSize: "cover"}}>
		<Characters />
		<br />
		<Planets />
		<br />
		<Vehicles />
	</div>
);
