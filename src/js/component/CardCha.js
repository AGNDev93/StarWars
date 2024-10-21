import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";


export default function CardCha({ id, image, title, gender, hair_color, eye_color }) {
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
        <div className="card pb-3" style={{ width: "16rem", height: "20rem" }}>
            <img src={image} className="card-img-top" alt="Imágen no funciona desde la API" style={{ height: "47%" }} />
            <div className="card-body" style={{ height: "40%" }}>
                <h6 className="card-title pb-2 d-flex justify-content-start">{title}</h6>
                <p className="card-text mb-0 d-flex justify-content-start">Gender: {gender}</p>
                <p className="card-text mb-0 d-flex justify-content-start">Hair-color: {hair_color}</p>
                <p className="card-text pb-2 d-flex justify-content-start">Eye-color: {eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/single_character/" + id} className="btn btn-outline-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning" onClick={toggleFavorite}><i className={`fa-heart ${isFavorite ? 'fa-solid' : 'fa-regular'}`} style={{ color: isFavorite ? 'yellow' : 'inherit' }}></i></button>
                </div>
            </div>
        </div>
    )
}