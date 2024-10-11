import React from "react";
import { Link } from "react-router-dom";

export default function CardCha({ image, title, gender, hair_color, eye_color }) {

    return (
        <div className="card" style={{ width: "27rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {title}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair-color: {hair_color}</p>
                <p className="card-text">Eye-color: {eye_color}</p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <button className="btn btn-outline-warning"><i className="fas fa-heart" /></button>
                </div>
            </div>
        </div>
    )
}