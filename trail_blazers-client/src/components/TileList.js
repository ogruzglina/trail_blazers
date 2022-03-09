import Tile from "./Tile"

function TileList({ trails }) {
    if (!trails) return null
    return (
        <div>
            {trails.map(trail => {
                return <Tile key={trail.id} trailData={trail} />
            })}
        </div>
    )
}

export default TileList