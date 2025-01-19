import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStart = props => {
    const { store, actions } = useContext(Context);
    const [currentVehicle, setCurrentVehicle] = useState({})
    const params = useParams();
    useEffect(() => {
        if (store.vehicles) {
            if (store.vehicles.length > 0 && params.theid) {
                const result = store.vehicles.find(item => item.url.split("/")[5] == params.theid)
                if (result) {
                    setCurrentVehicle(result)
                }
            }
        }
    }, [store.vehicle, params])
    return (
        <div className="container d-flex justify-content-between">
            <div className="row g-0">
                <div className="d-flex justify-content-center mt-5">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} className="img-fluid"
                            alt="Vehicle" style={{ width: "460px", height: "300px", border: "7px solid #800080", borderRadius: "20px" }} />
                    </div>
                    <div className="col-md-5 ps-4">
                        <h5 className="card-title text-center">{currentVehicle.name}</h5>
                        <p className="card-text d-flex text-center">Hello !!, my name's {currentVehicle.name}, model {currentVehicle.model} and manufatured in {currentVehicle.manufacturer}. In addition to that, I've a cost in credits of {currentVehicle.cost_in_credits}, a length of {currentVehicle.length}, max atmosphering speed  of {currentVehicle.max_atmosphering_speed} and I'm here due to I'm part of the Star Wars movie.</p>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center text-center mt-4">
                        <hr style={{ border: "3px solid blue", width: "83%" }} />
                    </div>
                    <div className="d-flex justify-content-center text-center text-danger mt-3">
                        <div className="col-md-2 my-3">
                            <h6>Name</h6>
                            <p>{currentVehicle.name}</p>
                        </div>
                        <div className="col-md-2 my-3">
                            <h6>Model</h6>
                            <p>{currentVehicle.model}</p>
                        </div>
                        <div className="col-md-2 my-3">
                            <h6>Manufacturer</h6>
                            <p>{currentVehicle.manufacturer}</p>
                        </div>
                        <div className="col-md-2 my-3">
                            <h6>Cost in credits</h6>
                            <p>{currentVehicle.cost_in_credits}</p>
                        </div>
                        <div className="col-md-2 my-3">
                            <h6>Length</h6>
                            <p>{currentVehicle.length}</p>
                        </div>
                        <div className="col-md-2 my-3">
                            <h6>Max atmosphering speed</h6>
                            <p>{currentVehicle.max_atmosphering_speed}</p>
                        </div>
                    </div>
                    <div className="d-flex text-center my-2 pb-2">
                        <hr style={{ border: "3px solid blue", width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleStart.propTypes = {
    match: PropTypes.object
};
