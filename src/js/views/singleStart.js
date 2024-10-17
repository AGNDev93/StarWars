import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStart = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getVehicle(params.theid)
    }, [])
    return (
        <div className="card mb-3 d-flex justify-content-center">
            <div className="row g-0">
                <div className="d-flex justify-content-center">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${params.theid}.jpg`} className="img-fluid rounded-start" alt="Character" style={{ width: "800px", heigh: "600px" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">{store.vehicle.name}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos luctus magna sociis, eget nec integer vivamus sociosqu nunc est felis enim. Quisque quis erat enim velit aliquet dictumst porttitor fusce potenti mauris, convallis dui sagittis lectus inceptos hac pulvinar sollicitudin platea, scelerisque risus tellus nunc nisl sodales feugiat dictum orci. </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <hr className="mt-3" style={{ border: "1px solid red", width: "100%" }} />
                </div>
                <div className="d-flex text-center text-danger">
                    <div className="col-md-2 my-3">
                        <h4>Name</h4>
                        <p>{store.vehicle.name}</p>
                    </div>
                    <div className="col-md-2 my-3">
                        <h4>Model</h4>
                        <p>{store.vehicle.model}</p>
                    </div>
                    <div className="col-md-2 my-3">
                        <h4>Manufacturer</h4>
                        <p>{store.vehicle.manufacturer}</p>
                    </div>
                    <div className="col-md-2 my-3">
                        <h4>Cost in Credits</h4>
                        <p>{store.vehicle.cost_in_credits}</p>
                    </div>
                    <div className="col-md-2 my-3">
                        <h4>length</h4>
                        <p>{store.vehicle.length}</p>
                    </div>
                    <div className="col-md-2 my-3">
                        <h4>Max Atmosphering Speed</h4>
                        <p>{store.vehicle.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
            <hr className="mt-3" style={{ border: "1px solid black", width: "100%" }} />
        </div>
    );
};
SingleStart.propTypes = {
    match: PropTypes.object
};
