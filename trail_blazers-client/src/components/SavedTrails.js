import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import logo from "./logo.png"

function SavedTrails() {
    return (
        <Navbar>
            <Container>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <b>Home</b>
                </Link>
                <span style={{paddingLeft: "48px"}}><img style={{ height: "100px" }} src={logo} alt="logo" /></span>
                <span style={{ color: "white" }}>placeholder</span>
            </Container>
        </Navbar>

    )
}

export default SavedTrails