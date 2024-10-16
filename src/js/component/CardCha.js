import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export default function CardCha({ id, image, title, gender, hair_color, eye_color }) {
    const { actions, store } = useContext(Context)
    return (
        <div className="card" style={{ width: "400px" }}>
            <img src={image} className="card-img-top object-fit-cover" alt="Imágen no funciona desde la API" style={{ width: "400px", height: "200px" }} />
            <div className="card-body">
                <h5 className="card-title">Name: {title}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair-color: {hair_color}</p>
                <p className="card-text">Eye-color: {eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/single/"+id} className="btn btn-outline-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorite(title)}><i className="fas fa-heart" /></button>
                </div>
            </div>
        </div>
    )
}