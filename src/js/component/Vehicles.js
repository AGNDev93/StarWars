import React, { useEffect, useContext } from "react";
import CardStart from "./CardStart";
import { Context } from "../store/appContext"
import { motion } from "framer-motion";


const Vehicles = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getVehicles()
    }, [])
    console.log(store.vehicles)
    return (
        <div style={{ paddingBottom: "70px" }}>
            <h1 className="d-flex flex-start mb-4 ms-5 pt-3" style={{ color: "#FFF5E1" }}><b>Vehicles</b></h1>
            <div className="d-flex flex-row overflow-scroll ms-5 me-5">
                {store.vehicles.map((item, index) => (
                    <motion.div
                        key={index}
                        style={{ display: 'inline-block', marginRight: '25px' }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <CardStart key={index}
                            title={item.name}
                            model={item.model}
                            length={item.length}
                            id={item.url.split("/")[5]}
                            image={"https://logo-marque.com/wp-content/uploads/2020/11/Star-Wars-Symbole.jpg"}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Vehicles