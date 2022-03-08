import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

function SavedTrails() {
    return (
        <Navbar>
            <Container>
                <Link to="/">
                    Home
                </Link>
            </Container>
        </Navbar>
        
    )
}

export default SavedTrails