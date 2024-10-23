import React, { useEffect, useContext } from "react";
import CardStart from "./CardStart";
import { Context } from "../store/appContext"


const Vehicles = () => {
    const { actions, store } = useContext(Context)
    // let images = [
    //     "https://static.wikia.nocookie.net/starwars/images/3/38/Corvette_negvv.png/revision/latest?cb=20170410043658",
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4XqMOtohI5FwNKGedzFnqSaua9kICsyAbw&s",
    //     "https://i.redd.it/2cr0elw3eha51.jpg",
    //     "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
    //     "https://static.wikia.nocookie.net/starwars/images/5/52/Millennium_Falcon_Fathead_TROS.png/revision/latest?cb=20221029015218",
    //     "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
    //     "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
    //     "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
    //     "https://static.wikia.nocookie.net/starwars/images/c/c0/ExecutorShuttle-ESB.jpg/revision/latest?cb=20120110005334",
    //     "https://i.etsystatic.com/10854630/r/il/3be46e/3269877296/il_570xN.3269877296_30he.jpg"
    // ]


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