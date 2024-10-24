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
				<div className="d-flex justify-content-center">
					<div className="col-md-5 d-flex justify-content-center">
						{params.theid == 1 ?
							<img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="img-fluid rounded-start" alt={store.planet.name} style={{ width: "460px", height: "300px" }} />
							:
							<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="img-fluid rounded-start" alt={store.planet.name} style={{ width: "460px", height: "300px" }} />
						}
					</div>
					<div className="col-md-5 ps-4">
						<h5 className="card-title text-center">{store.planet.name}</h5>
						<p className="card-text d-flex text-center">Facilisi suscipit commodo ante praesent cubilia quam aliquet luctus porttitor tempus cursus, turpis magnis pretium dictum montes vehicula et est laoreet rhoncus, ac mi sapien sodales nullam gravida euismod placerat nam convallis. Convallis conubia posuere aenean sollicitudin habitant ad pretium tristique natoque, curae ligula erat pharetra ornare accumsan tortor.</p>
					</div>
				</div>
				<div>
					<div className="d-flex justify-content-center text-center">
						<hr style={{ border: "1px solid red", width: "83%" }} />
					</div>
					<div className="d-flex justify-content-center text-center text-danger">
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
					<div className="d-flex text-center my-3">
						<hr style={{ border: "1px solid black", width: "100%" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
SinglePlan.propTypes = {
	match: PropTypes.object
};