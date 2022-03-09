import Tile from "./Tile"

function TileList({ trails, setSearch }) {
    if (!trails) return null
    return (
        <div>
            {trails.map(trail => {
                return <Tile key={trail.id} trailData={trail} setSearch={setSearch} />
            })}
        </div>
    )
}

export default TileList