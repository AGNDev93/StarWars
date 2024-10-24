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
            <h1 className="text-danger d-flex flex-start mb-4">Vehicles</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.vehicles.map((item, index) => (
                    <div key={index} style={{ display: 'inline-block', marginRight: '25px' }}>
                        <CardStart key={index}
                            title={item.name}
                            model={item.model}
                            length={item.length}
                            id={item.url.split("/")[5]}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Vehicles