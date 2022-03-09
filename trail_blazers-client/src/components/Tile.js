import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"


function Tile({ trailData }) {
    let locationSplit = trailData.location.split(",")
    let location = (locationSplit[1] + "," + locationSplit[2].slice(0, 3))
    let hours = Math.floor(trailData.duration / 60)
    let minutes = trailData.duration % 60
    let duration
    if (minutes === 0) {
        duration = `${hours}h`
    } else if (hours === 0) {
        duration = `${minutes}m`
    } else {
        duration = `${hours}h ${minutes}m`
    }
    let difficulty = trailData.difficulty
    let difficultyColor
    if (difficulty === "Easy") {
        difficultyColor = "seagreen"
    } else if (difficulty === "Moderate") {
        difficultyColor = "#f1c232"
    } else {
        difficultyColor = "#da1b1b"
    }
        
    return (
        <div className="tile-container">
            <Row xs={1} md={4} className="g-4" style={{ paddingBottom: "20px" }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card >
                            <Link to={`/review/${trailData.id}`} style={{ textDecoration: "none", color: "black" }}>
                                <Card.Img variant="top" src={trailData.trail_picture} />
                                <Card.Body>
                                    <Card.Title>{trailData.trail_name}</Card.Title>
                                    <Card.Text>
                                        <div>
                                            {location}
                                        </div>
                                        <div>
                                            <span style={{ backgroundColor: difficultyColor, borderRadius: "30px", color: "white", padding: "3px 20px" }}>
                                                {trailData.difficulty}
                                            </span>
                                        </div>
                                        <div>
                                            Length: {trailData.length} mi &nbsp; • &nbsp; Est. {duration}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Tile