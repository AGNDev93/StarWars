import React, { useEffect, useContext } from "react";
import CardPlan from "./CardPlan";
import { Context } from "../store/appContext"


const Planets = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.getPlanets()
    }, [])
    console.log(store.planets)
    return (
        <div>
            <h1>Planets</h1>
            <div className="d-flex flex-row overflow-x-scroll">
                {store.planets.map((item, index) => (
                    <CardPlan key={index}
                        image={"https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg"}
                        title={item.name}
                        population={item.population}
                        terrain={item.terrain}
                    />
                ))}
            </div>
        </div>
    )
}
export default Planets