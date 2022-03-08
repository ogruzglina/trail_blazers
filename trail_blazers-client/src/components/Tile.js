import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"


function Tile({ props }) {
    return (
        <div className="tile-container">
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 20 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Link to="/review">
                                <Card.Img variant="top" src="https://cdn.securem2.com//commonimages/pages/2021/8/mountainrangefall.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        Card body
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