import { Link } from "react-router-dom"
import React from "react";
import Tile from "./Tile"

function TilesList({ trails }) {
    console.log('list',trails)
    // const tile = trails.map(trail => console.log(trail))
    
    //  let tiles = "aaaaaaa"

    if (!trails) return null
    return (
    <div>
        {
            trails.map(trail => {
                return <Tile key={trail.id} trailData={trail} />
            })
        }
    </div>
    )

}
export default TilesList;