import Tile from "./Tile"
import Row from "react-bootstrap/Row"

function TileList({ trails, setSearch }) {
    if (!trails) return null
    return (
        <div >
            <Row xs={1} md={4} className="g-4" style={{ paddingBottom: "20px", paddingLeft: "30px", paddingRight: "30px"}}>
                {trails.map(trail => {
                    return <Tile key={trail.id} trailData={trail} setSearch={setSearch} />
                })}
            </Row>
        </div>
    )
}

export default TileList