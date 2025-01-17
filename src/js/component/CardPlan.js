import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export default function CardPlan({ id, image, title, population, terrain }) {
    const { actions, store } = useContext(Context)
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        setIsFavorite(store.favorites.includes(title));
    }, [store.favorites, title]);
    const toggleFavorite = () => {
        actions.addFavorite(title);
        setIsFavorite(prev => !prev);
    };
    return (
        <div className="card pb-2 mt-3" style={{ width: "16rem", height: "20rem" }}>
            <img src={image} className="card-img-top" alt="Planet" style={{ height: "47%" }} />
            <div className="card-body" style={{ height: "40%" }}>
                <h6 className="card-title pb-2 d-flex justify-content-start">{title}</h6>
                <p className="card-text mb-0 d-flex justify-content-start">Population: {population}</p>
                <p className="card-text pb-2 d-flex justify-content-start text-start">Terrain: {terrain}</p>
            </div>
            <div className="d-flex justify-content-between ps-3 pe-3">
                <Link to={"/single_planet/" + id} className="btn btn-outline-primary">Learn more!</Link>
                <button className="btn btn-outline-warning" onClick={toggleFavorite}><i className={`fa-heart ${isFavorite ? 'fa-solid' : 'fa-regular'}`} style={{ color: isFavorite ? 'yellow' : 'inherit' }}></i></button>
            </div>
        </div>
    )
}