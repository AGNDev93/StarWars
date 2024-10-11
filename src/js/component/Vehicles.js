import React, { useEffect, useContext } from "react";
import CardStart from "./CardStart";
import { Context } from "../store/appContext"


const Vehicles = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.getVehicles()
    }, [])
    console.log(store.vehicles)
    return (
        <div>
            <h1>Vehicles</h1>
            <div className="d-flex flex-row overflow-x-scroll">
                {store.vehicles.map((item, index) => (
                    <CardStart key={index}
                        image={"https://starwars-visualguide.com/assets/img/vehicles/" + (index + 1) + ".jpg"}
                        title={item.name}
                        model={item.model}
                        manufacturer={item.manufacturer}
                    />
                ))}
            </div>
        </div>
    )
}
export default Vehicles