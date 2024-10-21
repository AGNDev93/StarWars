import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export default function CardStart({ id, image, title, model, length}) {
    const { actions, store } = useContext(Context)
    return (
        <div className="card pb-2" style={{ width: "16rem", height:"19rem" }}>
            <img src={image} className="card-img-top img-fluid" alt="Imágen no funciona desde la API" style={{ height:"47%" }}/>
            <div className="card-body" style={{ height:"40%" }}>
                <h6 className="card-title d-flex justify-content-start pb-2">{title}</h6>
                <p className="card-text d-flex justify-content-start mb-0 text-start">Model: {model}</p>
                <p className="card-text d-flex justify-content-start  text-start pb-2"> Length {length}</p>
            </div>
                <div className="d-flex justify-content-between ps-3 pe-3">
                    <Link to={"/single_startship/" + id} className="btn btn-outline-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorite(title)}><i className="fa-regular fa-heart"></i></button>
                </div>
            
        </div>
    )
}