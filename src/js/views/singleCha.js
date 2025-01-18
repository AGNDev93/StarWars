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
		<div className="container d-flex justify-content-between">
			<div className="row g-0" >
				<div className="d-flex justify-content-center mt-5">
					<div className="col-md-5 d-flex justify-content-center">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start"
							alt="Character" style={{ width: "460px", height: "300px" }} />
					</div>
					<div className="col-md-5 ps-4">
						<h5 className="card-title text-center">{store.character.name}</h5>
						<p className="card-text d-flex text-center">Hello !!, my name's {store.character.name}, {store.character.gender}, born in the year {store.character.birth_year} and with a height of {store.character.height}. In addition to that, my skin color is {store.character.skin_color}, my eye color is {store.character.eye_color} and I'm here due to I'm part of the Star Wars movie.</p>
					</div>
				</div>
				<div>
					<div className="d-flex justify-content-center text-center mt-4">
						<hr style={{ border: "1px solid red", width: "83%" }} />
					</div>
					<div className="d-flex justify-content-center text-center text-danger mt-3">
						<div className="col-md-2 my-3">
							<h6>Name</h6>
							<p>{store.character.name}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Birth Year</h6>
							<p>{store.character.birth_year}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Gender</h6>
							<p>{store.character.gender}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Height</h6>
							<p>{store.character.height}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Skin Color</h6>
							<p>{store.character.skin_color}</p>
						</div>
						<div className="col-md-2 my-3">
							<h6>Eye Color</h6>
							<p>{store.character.eye_color}</p>
						</div>
					</div>
					<div className="d-flex text-center my-2 pb-2">
						<hr style={{ border: "1px solid black", width: "100%" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
SingleCha.propTypes = {
	match: PropTypes.object
};
