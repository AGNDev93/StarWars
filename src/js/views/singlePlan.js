import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlan = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanet(params.theid)
	}, [])
	return (
		<div className="container d-flex justify-content-between">
			<div className="row g-0" >
				<div className="d-flex justify-content-center mt-5">
					<div className="col-md-5 d-flex justify-content-center">
						
							<img src={"https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"} className="img-fluid" alt={store.planet.name} style={{ width: "460px", height: "300px", border: "7px solid #800080", borderRadius: "20px"}} />
						
					</div>
					<div className="col-md-5 ps-4">
						<h5 className="card-title text-center">{store.planet.name}</h5>
						<p className="card-text d-flex text-center">Hello !!, I'm the Planet {store.planet.name}, with a climate {store.planet.climate} and a population of {store.planet.population}. In addition to that, I've an orbit period of {store.planet.orbital_period}, a rotation period of {store.planet.rotation_period}, diameter of {store.planet.diameter} and I'm here due to I'm part of the Star Wars movie.</p>
					</div>
				</div>
				<div>
					<div className="d-flex justify-content-center text-center mt-4">
						<hr style={{ border: "3px solid blue", width: "83%" }} />
					</div>
					<div className="d-flex justify-content-center text-center text-danger mt-3">
						<div className="col-md-2 my-3">
							<h6>Name</h6>
							<p>{store.planet.name}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Birth Year</h6>
							<p>{store.planet.climate}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Gender</h6>
							<p>{store.planet.population}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Height</h6>
							<p>{store.planet.orbital_period}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Skin Color</h6>
							<p>{store.planet.rotation_period}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Eye Color</h6>
							<p>{store.planet.diameter}</p>
						</div>
					</div>
					<div className="d-flex text-center my-2 pb-2">
						<hr style={{ border: "3px solid blue", width: "100%" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
SinglePlan.propTypes = {
	match: PropTypes.object
};