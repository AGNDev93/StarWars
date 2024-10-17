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
		<div className="card mb-3 d-flex justify-content-center">
			<div className="row g-0">
				<div className="d-flex justify-content-center mt-3">
					<div className="col-md-4">
						{params.theid == 1 ?
							<img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="img-fluid rounded-start" alt={store.planet.name} style={{ width: "800px", heigh: "600px" }} />
							:
							<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="img-fluid rounded-start" alt={store.planet.name} style={{ width: "800px", heigh: "600px" }} />
						}
					</div>
					<div className="col-md-5">
						<div className="card-body text-center">
							<h5 className="card-title">{store.planet.name}</h5>
							<p className="card-text">Purus luctus auctor curae mi aliquet lacus magna hac fringilla penatibus, inceptos posuere ullamcorper facilisis potenti urna diam platea primis parturient, mauris nostra iaculis taciti condimentum maecenas tempus eget nullam. Orci eros porttitor tempus lobortis conubia vel, eget congue cum ultrices etiam lacus, nullam nisi gravida mauris varius.</p>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<hr className="mt-3" style={{ border: "1px solid red", width: "75%" }} />
				</div>
				<div className="d-flex text-center text-danger">
					<div className="col-md-2 my-3">
						<h4>Name</h4>
						<p>{store.planet.name}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Climate</h4>
						<p>{store.planet.climate}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Population</h4>
						<p>{store.planet.population}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Orbital Period</h4>
						<p>{store.planet.orbital_period}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Rotation Period</h4>
						<p>{store.planet.rotation_period}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Diameter</h4>
						<p>{store.planet.diameter}</p>
					</div>
				</div>
				<hr className="mt-3" style={{ border: "1px solid black", width: "100%" }} />
			</div>
		</div>
	);
};
SinglePlan.propTypes = {
	match: PropTypes.object
};
