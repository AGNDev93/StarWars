import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCha = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacter(params.theid)
	}, [])
	return (
		<div className="card mb-3 d-flex justify-content-center" style={{ maxWidth: "540px;" }}>
			<div className="row g-0">
				<div className="d-flex justify-content-center">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start" alt="Character" />
					</div>
					<div className="col-md-5">
						<div className="card-body text-center">
							<h5 className="card-title">{store.character.name}</h5>
							<p className="card-text">Facilisi suscipit commodo ante praesent cubilia quam aliquet luctus porttitor tempus cursus, turpis magnis pretium dictum montes vehicula et est laoreet rhoncus, ac mi sapien sodales nullam gravida euismod placerat nam convallis. Convallis conubia posuere aenean sollicitudin habitant ad pretium tristique natoque, curae ligula erat pharetra ornare accumsan tortor.</p>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<hr className="mt-3" style={{ border: "1px solid red", width: "75%" }} />
				</div>
				<div className="d-flex text-center">
					<div className="col-md-2 my-3">
						<h4>Name</h4>
						<p>{store.character.name}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Birth Year</h4>
						<p>{store.character.birth_year}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Gender</h4>
						<p>{store.character.gender}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Height</h4>
						<p>{store.character.height}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Skin Color</h4>
						<p>{store.character.skin_color}</p>
					</div>
					<div className="col-md-2 my-3">
						<h4>Eye Color</h4>
						<p>{store.character.eye_color}</p>
					</div>
				</div>
			</div>
			<hr className="mt-3" style={{ border: "1px solid black", width: "100%" }} />
		</div>

	);
};
SingleCha.propTypes = {
	match: PropTypes.object
};
