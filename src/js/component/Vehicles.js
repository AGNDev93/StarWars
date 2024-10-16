import React, { useEffect, useContext } from "react";
import CardStart from "./CardStart";
import { Context } from "../store/appContext"


const Vehicles = () => {
    const { actions, store } = useContext(Context)
    let images = [
        "https://static.wikia.nocookie.net/starwars/images/3/38/Corvette_negvv.png/revision/latest?cb=20170410043658",
        "",
        "",
        "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
        "",
        "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
        "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
        "",
        ""
    ]


    useEffect(() => {
        actions.getVehicles()
    }, [])
    console.log(store.vehicles)
    return (
        <div>
            <h1>Vehicles</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.vehicles.map((item, index) => (
                    <div key={index} style={{ display: 'inline-block', marginRight: '25px' }}>
                        <CardStart key={index}
                            image={images[index]}
                            title={item.name}
                            model={item.model}
                            manufacturer={item.manufacturer}
                            id={index + 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Vehicles