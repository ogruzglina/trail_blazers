import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

function SavedTrails() {
    return (
        <Navbar>
            <Container>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    Home
                </Link>
                <b style={{ fontSize: "24px" }}>Trail Blazers</b>
                <span style={{ color: "white" }}>placeholder</span>
            </Container>
        </Navbar>

    )
}

export default SavedTrails