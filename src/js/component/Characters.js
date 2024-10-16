import React, { useEffect, useContext } from "react";
import CardCha from "./CardCha";
import { Context } from "../store/appContext"


const Characters = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
    }, [])
    console.log(store.characters)
    return (
        <div>
            <h1>Characters</h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.characters.map((item, index) => (
                    <div key={index} style={{ display: 'inline-block', marginRight: '25px' }}>
                        <CardCha key={index}
                            image={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"}
                            title={item.name}
                            gender={item.gender}
                            hair_color={item.hair_color}
                            eye_color={item.eye_color}
                            id={index + 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Characters