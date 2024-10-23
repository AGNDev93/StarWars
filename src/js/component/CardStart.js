import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export default function CardStart({ id, title, model, length }) {
    const { actions, store } = useContext(Context)
    /* State to change heart*/
    const [isFavorite, setIsFavorite] = useState(false);
    /* Here start to change heart*/
    useEffect(() => {
        setIsFavorite(store.favorites.includes(title));
    }, [store.favorites, title]);

    const toggleFavorite = () => {
        actions.addFavorite(title); // Maneja la adición y eliminación
        setIsFavorite(prev => !prev); // Actualiza el estado del corazón
    };

    /*Here finish to change heart*/
    return (
        <div className="card pb-2" style={{ width: "16rem", height: "19rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top img-fluid" alt="Vehicle" style={{ height: "47%" }} />
            <div className="card-body" style={{ height: "40%" }}>
                <h6 className="card-title d-flex justify-content-start pb-2">{title}</h6>
                <p className="card-text d-flex justify-content-start mb-0 text-start">Model: {model}</p>
                <p className="card-text d-flex justify-content-start  text-start pb-2"> Length {length}</p>
            </div>
            <div className="d-flex justify-content-between ps-3 pe-3">
                <Link to={"/single_vehicle/" + id} className="btn btn-outline-primary">Learn more!</Link>
                <button className="btn btn-outline-warning" onClick={toggleFavorite}><i className={`fa-heart ${isFavorite ? 'fa-solid' : 'fa-regular'}`} style={{ color: isFavorite ? 'yellow' : 'inherit' }}></i></button>
            </div>

        </div>
    )
}