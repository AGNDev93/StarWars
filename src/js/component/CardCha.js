import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export default function CardCha({ id, image, title, gender, hair_color, eye_color }) {
    const { actions, store } = useContext(Context)
    return (
        <div className="card" style={{ width: "17rem" }}>
            <img src={image} className="card-img-top img-fluid" alt="Imágen no funciona desde la API" style={{ width: "400px", height: "200px" }} />
            <div className="card-body" >
                <h6 className="card-title pb-2">Name: {title}</h6>
                <p className="card-text pb-0">Gender: {gender}</p>
                <p className="card-text pb-0">Hair-color: {hair_color}</p>
                <p className="card-text pb-2">Eye-color: {eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/single_character/" + id} className="btn btn-outline-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning" onClick={() => actions.addFavorite(title)}><i className="fa-regular fa-heart"></i></button>

                    {/* <button
                        className={`btn ${isActive ? 'btn-warning' : 'btn-primary'}`}
                        onClick={toggleActive}
                    >
                        {isActive ? 'Activo' : 'Inactivo'}
                    </button> */}


                </div>
            </div>
        </div>
    )
}