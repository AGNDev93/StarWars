import React, { useEffect, useContext } from "react";
import CardCha from "./CardCha";
import { Context } from "../store/appContext"
import { motion } from "framer-motion";


const Characters = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getCharacters()
    }, [])
    console.log(store.characters)
    return (
        <div>
            <h1 className="d-flex flex-start mb-4 ms-5 pt-5" style={{ color: "#FFF5E1" }}><b>Characters</b></h1>
            <div className="d-flex flex-row overflow-scroll ms-5 me-5">
                {store.characters.map((item, index) => (
                    <motion.div
                        key={index}
                        style={{ display: 'inline-block', marginRight: '25px'}}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <CardCha key={index}
                            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8Hmrqco9q0EkaAhTM7q264uK4NKt3UApsA&s"}
                            title={item.name}
                            gender={item.gender}
                            hair_color={item.hair_color}
                            eye_color={item.eye_color}
                            id={index + 1}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Characters






