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
            <h1 className="text-danger d-flex flex-start mb-4">Planets</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.planets.map((item, index) => (
                    <div key={index} style={{ display: 'inline-block', marginRight: '25px' }}>
                        <CardPlan key={index}
                            image={index == 0 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" :
                                "https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg"}
                            title={item.name}
                            population={item.population}
                            terrain={item.terrain}
                            id={index + 1}

                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Planets