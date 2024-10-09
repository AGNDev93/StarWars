import React from "react";
import "../../styles/home.css";
import Card from "./Cards";
import Characters from "./Characters";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<Characters/>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
