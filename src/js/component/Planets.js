import React, { useEffect, useContext } from "react";
import CardPlan from "./CardPlan";
import { Context } from "../store/appContext"
import { motion } from "framer-motion";


const Planets = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPlanets()
    }, [])
    console.log(store.planets)
    return (
        <div>
            <h1 className="d-flex flex-start mb-4 ms-5 pt-3" style={{ color: "#FFF5E1" }}><b>Planets</b></h1>
            <div className="d-flex flex-row overflow-scroll ms-5 me-5">
                {store.planets.map((item, index) => (
                    <motion.div
                        key={index}
                        style={{ display: 'inline-block', marginRight: '25px' }}
                        animate={{ y: [0, -10, 0] }}  
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <CardPlan key={index}
                            image={"https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"}
                            title={item.name}
                            population={item.population}
                            terrain={item.terrain}
                            id={index + 1}

                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Planets