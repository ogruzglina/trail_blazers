import Tile from "./Tile"

function TileList({ trails }) {
    return (
        <div>
            {trails.map(trail => {
                return <Tile key={trail.id} trailData={trail} />
            })}
        </div>
    )
}

export default TileList