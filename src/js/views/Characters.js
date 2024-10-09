import React, { useEffect, useContext } from "react";
import Card from "./Cards";
import { Context } from "../store/appContext"

const Characters = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
    }, [])
    return (
        <div>
            {store.characters.map((item, index) => (
                <Card
                    image={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"}
                    title={item.name}
                    gender={item.gender}
                />
            ))}
        </div>
    )
}
export default Characters