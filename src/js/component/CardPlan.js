import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export default function CardPlan({ id, image, title, population, terrain }) {
    const { actions, store } = useContext(Context)
    console.log(id)
    return (
        <div className="card" style={{ width: "17rem" }}>
            <img src={image} className="card-img-top object-fit-cover img-fluid" alt="Imágen no funciona desde la API" style={{ width: "400px", height: "200px" }} />
            <div className="card-body">
                <h6 className="card-title pb-2">Name: {title}</h6>
                <p className="card-text pb-0">Population: {population}</p>
                <p className="card-text pb-0">Terrain: {terrain}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/single_planet/" + id} className="btn btn-outline-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorite(title)}><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}